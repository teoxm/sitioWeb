const images = document.querySelectorAll('.slider-container img');
let currentImageIndex = 0;

document.querySelector('#nextButton').addEventListener('click', () => {
    // Oculta la imagen actual
    images[currentImageIndex].style.display = 'none';

    // Avanza al siguiente índice de imagen
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Muestra la nueva imagen
    images[currentImageIndex].style.display = 'block';
});

document.querySelector('#prevButton').addEventListener('click', () => {
    // Oculta la imagen actual
    images[currentImageIndex].style.display = 'none';

    // Retrocede al índice anterior de la imagen
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;

    // Muestra la nueva imagen
    images[currentImageIndex].style.display = 'block';
});