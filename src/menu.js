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
        name: "Cheese Pizza",
        image: Pizza,
        price: "19.99",
        description: "Delicious mix of three cheeses and our specialty rich house-made marinara."
    };
    const cheeseburger = {
        name: "Cheeseburger",
        image: CheeseBurger,
        price: "12.99",
        description: "Juicy half pound patty with melted colby jack cheese. Served with fries."
    };
    const shrimp = {
        name: "Fried Shrimp Platter",
        image: Shrimp,
        price: "16.99",
        description: "Jumbo shrimp deep fried with our house made batter. Served with fries and a house salad."
    };
    const salad = {
        name: "Caesar Salad",
        image: Salad,
        price: "14.99",
        description: "Fresh cut romaine lettuce with house made croutons and Caesar dressing. Sprinkled with freshly grated parmesan-romano cheese."
    };
    const gumbo = {
        name: "Chicken Andouille Gumbo",
        image: Gumbo,
        price: "10.99",
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
        let itemName = document.createElement('h3');
        itemName.innerText = `${item.name}`;
        let itemDescription = document.createElement('p');
        itemDescription.innerText = `${item.description}`;
        let itemPrice = document.createElement('p');
        itemPrice.innerText = `$${item.price}`;
        let itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = `${item.name} - image`;
        menuItem.appendChild(itemImage);
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);
        menuItem.appendChild(itemDescription);
    });
}