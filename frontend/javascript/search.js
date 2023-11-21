//turning on strict mode
"use strict";

const searchBar = getElementById("searchbar");
let artList = [];
searchString = "";

fetch("art.js")
  .then((res) => res.json())
  .then((data) => {
    artList = data;
  });

function findArtListMatch(searchString) {
  const matchingArt = artList.filter((art) =>
  art.name.toLowerCase)
}

const searchButton = getElementById("searchbutton");
searchButton.addEventListener("keyUp", (e) => {
  const searchString = e.target.value.toLowerCase();

  
});