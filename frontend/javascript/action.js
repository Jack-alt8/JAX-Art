// Whole-script strict mode syntax
"use strict";

// Hamburger functionality
const toggleButton = document.getElementById("toggle-button");
const naviList = document.getElementById("nav-list");

toggleButton.addEventListener("click", () =>
  naviList.classList.toggle("active")
);

