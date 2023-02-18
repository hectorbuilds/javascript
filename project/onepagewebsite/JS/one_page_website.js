// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


//----

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
