// Floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = 3 + Math.random() * 3 + 's';
    heart.style.width = 10 + Math.random() * 20 + 'px';
    heart.style.height = heart.style.width;

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

// Popup interaction
const proposalText = document.getElementById('proposalText');
const popup = document.getElementById('popup');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

proposalText.addEventListener('click', () => {
    popup.style.display = 'flex';
});

// Yes button click
yesBtn.addEventListener('click', () => {
    alert('Yay! ❤️ Rebika said YES! 💕');
    popup.style.display = 'none';
});

// Moving No button
noBtn.addEventListener('mouseenter', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});
