export default function buildHeader() {
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
    const navLinkMenu = document.createElement('button');
    navLinkMenu.innerHTML = 'Menu';
    const navLinkContact = document.createElement('button');
    navLinkContact.innerHTML = 'Contact';
    navList.appendChild(navLinkHome);
    navList.appendChild(navLinkMenu);
    navList.appendChild(navLinkContact);
}