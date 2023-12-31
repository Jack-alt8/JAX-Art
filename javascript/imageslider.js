//use strict mode
"use strict";

/**
 * ---------------------------------------------------------------
 * Image slider
 * ---------------------------------------------------------------
 */

// previous and next buttons
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Next/previous controls
prevButton.addEventListener("click", () =>
    plusSlides(-1)
);

nextButton.addEventListener("click", () =>
  plusSlides(1)
);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
      showSlides((slideIndex += n));
    }

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}