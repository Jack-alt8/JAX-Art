// Whole-script strict mode syntax
"use strict";

// Hamburger functionality
const toggleButton = document.getElementById("toggle-button");
const naviList = document.getElementById("nav-list");

toggleButton.addEventListener("click", () =>
  naviList.classList.toggle("active")
);

/**
 * ===============================================================
 * Home page functionality
 * ===============================================================
 */

/**
 * ---------------------------------------------------------------
 * Image slider
 * ---------------------------------------------------------------
 */
let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}

/**
 * ==============================================================
 * Contact page functionality
 * ==============================================================
 */

//contact form
const name = document.getElementById('personsname');
const contactForm = document.getElementById('contact-form');
const emailErrorPara = document.getElementById('email-error')

personsname.addEventListener('input', function() {
  const pattern = /^[\w]{6,8}$/;
  const currentValue = e.target.value;
  const valid = pattern.test(currentValue)

  if(valid) {
    emailErrorPara.style.display = 'none'
  } else {
    emailErrorPara.style.display = 'block'
  }
})