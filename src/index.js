import buildMenu from "./menu.js";
import buildHome from "./home.js";
import buildContact from "./contact.js";
import buildHeader from "./header.js";
import './styles.css';


const content = document.getElementById('content');
const main = document.createElement('div');
main.setAttribute('id', 'main');
// content.appendChild(buildHeader());
buildHeader();
content.appendChild(main);