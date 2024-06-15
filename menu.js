document.addEventListener("DOMContentLoaded", function () {
    const cardData = {
        sandwiches: [
          {
            img: "assets/header.png",
            heading: "Cheese Chili Sandwich",
            body: "Indulge in the perfect blend of flavors with our Cheese and Chili Sandwich, a taste experience that is always in style.",
            price: "₹150"
          },
          {
            img: "assets/vegetable_sandwich.png",
            heading: "Vegetable Sandwich",
            body: "Enjoy the fresh and vibrant flavors of our Vegetable Sandwiches, packed with crisp, colorful veggies and wholesome goodness.",
            price: "₹120"
          },
        ],
        pizzas: [
          {
            img: "assets/pizza.png",
            heading: "Cheese Chili Pizza",
            body: "Dive into the bold and delicious flavors of our Cheese and Chili Pizza, an experience that never goes out of style.",
            price: "₹450"
          },
          {
            img: "assets/mexican_pizza.png",
            heading: "Mexican Pizza",
            body: "Savor the vibrant flavors of our Mexican Pizza, a perfect fusion of crispy crust, seasoned meats, fresh vegetables, and tangy salsa.",
            price: "₹500"
          }
        ],
        pasta: [
          {
            img: "assets/spaghetti.png",
            heading: "Spaghetti Carbonara",
            body: "Experience the creamy, savory delight of our Spaghetti Carbonara, made with perfectly cooked pasta, crispy pancetta, and a rich, cheesy sauce.",
            price: "₹400"
          },
          {
            img: "assets/ravioli.png",
            heading: "Spinach Ricotta Ravioli",
            body: "Savor the rich and creamy flavors of our Spinach Ricotta Ravioli, topped with a delicate sage butter sauce.",
            price: "₹380"
          }
        ],
        burgers: [
          {
            img: "assets/burger.png",
            heading: "Classic Beef Burger",
            body: "Sink your teeth into our Classic Beef Burger, a juicy patty topped with fresh lettuce, tomato, cheese, and our special sauce.",
            price: "₹250"
          }
        ],
       
        soups: [
          {
            img: "assets/tomato.png",
            heading: "Tomato Basil Soup",
            body: "Warm up with our Tomato Basil Soup, a creamy blend of ripe tomatoes and fresh basil, served with a side of crusty bread.",
            price: "₹180"
          },
          {
            img: "assets/hot_and_sour_soup.png",
            heading: "Hot and Sour Soup",
            body: "Experience the bold and tangy flavors of our Hot and Sour Soup, a perfect blend of spicy, sour, and savory ingredients.",
            price: "₹190"
          },
        ],
      
      };
      
    const postContainer = document.querySelector(".order__grid");

    const postMethods = () => {
      for (const category in cardData) {
        // Create category container
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');
  
        // Add category heading
        const headingElement = document.createElement('h2');
        headingElement.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryContainer.appendChild(headingElement);

        // Create images container
        const categoryContainer1 = document.createElement('div');
        categoryContainer1.classList.add('images-container');

        // Add images for the category
        cardData[category].forEach((postData) => {
          const postElement = document.createElement('div');
          postElement.classList.add("order__card");
          postElement.innerHTML = ` 
            <img src="${postData.img}" alt="order" />
            <h4>${postData.heading}</h4>
            <p>${postData.body}</p>
            <p class="price">Price: ${postData.price}</p>
          `;
          categoryContainer1.appendChild(postElement);
        });
  
        categoryContainer.appendChild(categoryContainer1);
        postContainer.appendChild(categoryContainer);
      }
    };
  
    postMethods();
});
