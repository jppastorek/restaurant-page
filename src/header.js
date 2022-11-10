import buildContact from "./contact";
import buildHome from "./home";
import buildMenu from "./menu";

export default function buildHeader() {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    content.appendChild(header);
    const headerText = document.createElement('div');
    headerText.setAttribute('class', 'header-text')
    headerText.innerText = `chloe`;
    header.appendChild(headerText);

    //NAV
    const headerNav = document.createElement('div');
    headerNav.setAttribute('class', 'header-nav');
    content.appendChild(headerNav);
    const navList = document.createElement('div');
    navList.setAttribute('class', 'nav-link');
    headerNav.appendChild(navList);

    //NAV LINKS
    const navLinkHome = document.createElement('button');
    navLinkHome.innerText = 'home';
    navLinkHome.addEventListener('click', () => {
        main.innerHTML = '';
        buildHome();
    });
    const navLinkMenu = document.createElement('button');
    navLinkMenu.innerHTML = 'menu';
    navLinkMenu.addEventListener('click', () => {
        main.innerHTML = '';
        buildMenu();
    });
    const navLinkContact = document.createElement('button');
    navLinkContact.innerHTML = 'contact';
    navLinkContact.addEventListener('click', () => {
        main.innerHTML = '';
        buildContact();
    });
    navList.appendChild(navLinkHome);
    navList.appendChild(navLinkMenu);
    navList.appendChild(navLinkContact);
}