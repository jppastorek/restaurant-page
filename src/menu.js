export default function buildMenu() {
    const pizza = {
        name: "Cheese Pizza",
        image: "",
        price: "19.99",
        description: "Delicious mix of three cheeses and our specialty rich house-made marinara."
    };
    const cheeseburger = {
        name: "Cheeseburger",
        image: "",
        price: "12.99",
        description: "Juicy half pound patty with melted colby jack cheese. Served with fries."
    };
    const friedShrimp = {
        name: "Fried Shrimp Platter",
        image: "",
        price: "16.99",
        description: "Jumbo shrimp deep fried with our house made batter. Served with fries and a house salad."
    };
    const salad = {
        name: "Caesar Salad",
        image: "",
        price: "14.99",
        description: "Fresh cut romaine lettuce with house made croutons and Caesar dressing. Sprinkled with freshly grated parmesan-romano cheese."
    };
    const gumbo = {
        name: "Chicken Andouille Gumbo",
        image: "",
        price: "10.99",
        description: "Bowl of chicken and andouille gumbo made in house every day."
    };
    const menu = [
        pizza,
        cheeseburger,
        friedShrimp,
        salad,
        gumbo,
    ];
    menu.forEach((item) => {
        let div = document.createElement('div');
        div.innerHTML = `${item.name}, ${item.price}, ${item.description}`
        content.appendChild(div);
    });
}