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

//search button functionality (mobile)
const toggleSearch = document.getElementById("toggle-search");
const search = document.getElementById("search");

toggleSearch.addEventListener("click", () =>
  search.classList.toggle("active")
);

//search button functionality (mobile)
const computertoggleSearch = document.getElementById("computer-toggle-search");

computertoggleSearch.addEventListener("click", () =>
  search.classList.toggle("active")
);