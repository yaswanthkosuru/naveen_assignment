document.addEventListener("DOMContentLoaded", async () => {
  //load json file
  async function loadJSON() {
    try {
      const response = await fetch("./list.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error loading JSON:", error);
      throw error;
    }
  }
  //render images
  function renderImages(images) {
    const CardItems = document.getElementById("cardcontainer");

    images.forEach((imageObj) => {
      const carditem = document.createElement("div");
      const imageItem = document.createElement("div");
      imageItem.classList.add("card-item");

      const image = document.createElement("img");
      image.src = imageObj.image;
      image.alt = "User Image";

      imageItem.appendChild(image);
      const descriptionitem = document.createElement("div");
      descriptionitem.classList.add("description-item");
      const name_el = document.createElement("p");
      name_el.classList.add("card-name");
      name_el.textContent = imageObj.name;
      const desc_el = document.createElement("p");
      desc_el.textContent = imageObj.desc;
      descriptionitem.appendChild(name_el);
      descriptionitem.appendChild(desc_el);
      imageItem.appendChild(descriptionitem);
      carditem.appendChild(imageItem);
      CardItems.appendChild(carditem);
    });
  }
  try {
    const jsonData = await loadJSON();
    console.log(jsonData);
    renderImages(jsonData);
  } catch (error) {
    console.error("Error rendering images:", error);
  }
});
