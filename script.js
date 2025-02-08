const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const message = document.getElementById('message');
const flowers = document.getElementById('flowers');

yesButton.addEventListener('click', () => {
    message.textContent = "You are my girlfriend!";
    flowers.classList.remove('hidden');
});

noButton.addEventListener('click', () => {
    moveButtonRandomly();
    changeBackgroundColor();
});

function moveButtonRandomly() {
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

function changeBackgroundColor() {
    const randomColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
    document.body.style.backgroundColor = randomColor;
}