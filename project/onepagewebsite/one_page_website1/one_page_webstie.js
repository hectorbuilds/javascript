// This is the JavaScript code for the modal image gallery
const gallery = document.querySelector('.image-gallery');
const images = gallery.querySelectorAll('.gallery-img');
const modal = document.querySelector('#modal');
const modalImg = document.querySelector('#modal-img');
const close = document.querySelector('.close');

// Add click event listener to each image
images.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = image.src;
  });
});

// Add click event listener to close button
close.addEventListener('click', () => {
  modal.style.display = 'none';
});

