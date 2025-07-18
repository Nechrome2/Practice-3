let button = document.getElementById('button');
let overlay = document.getElementById('overlay');

function closePopup() {
    overlay.style.display = 'none'
}

button.addEventListener('click', closePopup);