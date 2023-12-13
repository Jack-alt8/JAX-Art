// Whole-script strict mode syntax
"use strict";

// Hamburger functionality
const toggleButton = document.getElementById("toggle-button");
const navList = document.getElementById("nav-list");
const homeNav = document.getElementById("home-nav");

toggleButton.addEventListener("click", () =>
  navList.classList.toggle("active")
);
