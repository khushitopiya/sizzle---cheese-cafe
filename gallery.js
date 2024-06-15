document.addEventListener("DOMContentLoaded", function () {
  const cardData = {
    interior: [
      { img: "assets/Interior1.jpg" },
      { img: "assets/Interior2.jpg" },
      { img: "assets/Interior3.jpg" },
      { img: "assets/Interior4.jpg" },
      { img: "assets/Interior5.jpg" },
      { img: "assets/Interior6.jpg" }
    ],
    staff: [
      { img: "assets/Staff1.jpg" },
      { img: "assets/Staff2.jpg" },
      { img: "assets/Staff3.jpg" },
      { img: "assets/Staff4.jpg" }
    ],
    Events:[
      {img:"assets/Events1.jpg"},
      {img:"assets/Events2.jpg"},
      {img:"assets/Events3.jpg"},
      {img:"assets/Events4.jpg"},
      {img:"assets/Events5.jpg"},
    ]
  };

  const postContainer = document.querySelector(".gallery");

  const postMethods = () => {
    for (const category in cardData) {
      // Create category container
      const categoryContainer = document.createElement('div');
      categoryContainer.classList.add('category-container');

      // Add category heading
      const headingElement = document.createElement('h2');
      headingElement.textContent = category.charAt(0).toUpperCase() + category.slice(1);
      categoryContainer.appendChild(headingElement);

      // Add images for the category
      const imagesContainer = document.createElement('div');
      imagesContainer.classList.add('images-container1');

      cardData[category].forEach((postData) => {
        const postElement = document.createElement('div');
        postElement.classList.add('image');
        postElement.innerHTML = `<img src="${postData.img}" alt="${category}" />`;
        imagesContainer.appendChild(postElement);
      });

      categoryContainer.appendChild(imagesContainer);
      postContainer.appendChild(categoryContainer);
    }
  };

  postMethods();

  document.querySelectorAll('.gallery img').forEach(image => {
    image.onclick = () => {
      document.querySelector('.popup-image').style.display = 'flex';
      document.querySelector('.popup-image img').src = image.getAttribute('src');
    };
  });

  document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
  };
});
