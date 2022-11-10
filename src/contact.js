export default function buildContact() {
    main.innerHTML = '';
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact');
    const tel = document.createElement('h4');
    const email = document.createElement('h4');
    tel.innerText = '+1-504-290-5545';
    email.innerHTML = '<a href="">orders@chloes.com</a>';
    main.appendChild(contactContainer);
    contactContainer.appendChild(tel);
    contactContainer.appendChild(email);
}