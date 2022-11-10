import Pizza from './images/pizza.jpg';
import CheeseBurger from './images/cheeseburger.jpg';
import Gumbo from './images/gumbo.jpg';
import Salad from './images/salad.jpg';
import Shrimp from './images/shrimp.jpg';

// const pizzaImage = new Image();
// pizzaImage.src = Pizza;
// const burgerImage = new Image();
// burgerImage.src = CheeseBurger;
// const gumboImage = new Image();
// gumboImage.src = Gumbo;
// const saladImage = new Image();
// saladImage.src = Salad;
// const shrimpImage = new Image();
// shrimpImage.src = Shrimp;

export default function buildMenu() {
    const pizza = {
        name: "pizza",
        image: Pizza,
        price: "18",
        description: "Delicious mix of three cheeses and our specialty house-made marinara."
    };
    const cheeseburger = {
        name: "burger",
        image: CheeseBurger,
        price: "12",
        description: "Juicy half pound patty with melted colby jack cheese."
    };
    const shrimp = {
        name: "shrimp",
        image: Shrimp,
        price: "16",
        description: "Jumbo shrimp deep fried with our house made batter."
    };
    const salad = {
        name: "salad",
        image: Salad,
        price: "14",
        description: "Fresh cut romaine lettuce with house made croutons and dressing."
    };
    const gumbo = {
        name: "gumbo",
        image: Gumbo,
        price: "12",
        description: "Bowl of chicken and andouille gumbo made in house every day."
    };
    const menu = [
        pizza,
        cheeseburger,
        shrimp,
        salad,
        gumbo,
    ];
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    main.appendChild(menuContainer);
    menu.forEach((item) => {
        let menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuContainer.appendChild(menuItem);
        let nameContainer = document.createElement('div');
        nameContainer.classList.add('name-container');
        let itemName = document.createElement('h3');
        itemName.innerText = `${item.name}`;
        let itemDescription = document.createElement('p');
        itemDescription.innerText = `${item.description}`;
        itemDescription.classList.add('italic');
        let itemPrice = document.createElement('h3');
        itemPrice.innerText = `${item.price}`;
        let itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = `${item.name} - image`;
        let imageDiv = document.createElement('div');
        imageDiv.classList.add('image-container');
        imageDiv.appendChild(itemImage);
        menuItem.appendChild(imageDiv);
        menuItem.appendChild(nameContainer);
        nameContainer.appendChild(itemName);
        nameContainer.appendChild(itemPrice);
        menuItem.appendChild(itemDescription);
    });
}