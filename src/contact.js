export default function buildContact() {
    main.innerHTML = '';
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact');
    const address = document.createElement('h4');
    const email = document.createElement('h4');
    address.innerText = '4714 S Telemachus NOLA 70123';
    email.innerHTML = '<a href="">orders@chloes.com</a>';
    main.appendChild(contactContainer);
    contactContainer.appendChild(address);
    contactContainer.appendChild(email);
}