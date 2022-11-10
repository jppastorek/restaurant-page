export default function buildHome() {
    main.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('home');
    const title = document.createElement('h4');
    title.innerText = 'Serving your favorites since 2018';
    const subtitle = document.createElement('h4');
    subtitle.innerText = 'Order online or visit us today!';
    main.appendChild(div);
    div.appendChild(title);
    div.appendChild(subtitle);
};