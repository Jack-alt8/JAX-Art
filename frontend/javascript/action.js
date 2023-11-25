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
 * Search bar
 * ---------------------------------------------------------------
 */
const toggleSearch = document.getElementById("toggle-search");
const search = document.getElementById("search-wrapper");

toggleSearch.addEventListener("click", () =>
  search.classList.toggle("active")
);