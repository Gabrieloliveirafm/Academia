
const images = document.querySelectorAll('.header img');
let currentImageIndex = 0;

setInterval(() => {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}, 5000); // Altera a cada 5 segundos (5000 milissegundos)
