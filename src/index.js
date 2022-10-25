import buildMenu from "./menu.js";
import buildHeader from "./header.js";
import './styles.css';
import buildHome from "./home.js";

const content = document.getElementById('content');
const main = document.createElement('div');
main.setAttribute('class', 'main');


//HEADER
const header = document.createElement('div');
header.setAttribute('id', 'header');
content.appendChild(header);
const headerText = document.createElement('div');
headerText.setAttribute('class', 'header-text')
headerText.innerText = `Chloe's Classic Cuisine`;
header.appendChild(headerText);

//NAV
const headerNav = document.createElement('div');
headerNav.setAttribute('class', 'header-nav');
const navList = document.createElement('div');
navList.setAttribute('class', 'nav-link');
content.appendChild(headerNav);
headerNav.appendChild(navList);
//NAV LINKS
const navLinkHome = document.createElement('button');
navLinkHome.innerText = 'Home';
navLinkHome.addEventListener('click', () => {
    main.innerHTML = '';
    buildHeader();
    buildHome();
});

const navLinkMenu = document.createElement('button');
navLinkMenu.innerHTML = 'Menu';
navLinkMenu.addEventListener('click', () => {
    main.innerHTML = '';
    buildMenu();
});

const navLinkContact = document.createElement('button');
navLinkContact.innerHTML = 'Contact';
// navLinkContact.addEventListener('click', () => {

// });

navList.appendChild(navLinkHome);
navList.appendChild(navLinkMenu);
navList.appendChild(navLinkContact);
content.appendChild(main);