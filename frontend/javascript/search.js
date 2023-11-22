//turning on strict mode
"use strict";

// list of artimages tagged with descriptions
const searchBar = document.getElementById("searchbar");
let artList = [
  {
    imgsrc: "../../backend/artimages/Abstract_art/untitled_series/untitled_11.png",
    name: "Untitled_1",
    size: "100px by 100px",
    type: "Digital Art",
    date: "2023",
    listenedto: "",
    series: "Untitled Series"
  },
  {
    imgsrc: "../../backend/artimages/Abstract_art/untitled_series/untitled_10.png",
    name: "Untitled_2",
    size: "100px by 100px",
    type: "Digital Art",
    date: "2023",
    listenedto: "",
    series: "Untitled Series"
  },
];
searchString = "";

// grabbing list of artworks with their descriptions
function findArtListMatch(searchString) {
  const matchingArt = artList.filter((art) =>
  art.name.toLowerCase().includes(searchString.toLowerCase())
  );
  return matchingArt;
};

// displaying descriptions and image attached
function displayMatchingItems(matchingArt) {
  if (matchingArt.length > 0) {
    // display the matching items
    matchingArt.forEach((art) => {
      // show the description of the items
      // need to be able to input image source into html \/
      document.getElementById("result-art").innerHTML = art.imgsrc;
      document.getElementById("artname-text").innerHTML = art.name;
      document.getElementById("size-text").innerHTML = art.size;
      document.getElementById("type-of-art-text").innerHTML = art.type;
      document.getElementById("date-text").innerHTML = art.date;
      document.getElementById("listened-to-text").innerHTML = art.listenedto;
      document.getElementById("series-text").innerHTML = art.series;
    });
  } else {
    console.log("no results");
    document.getElementById("artname-text").innerHTML = "Art not found";
  }
};

// search button
function onSearchButtonClick() {
  console.log("clicked");
  const searchString = document.getElementById("searchbar").value;
  console.log(searchString);
  console.log(artList);

  // search items from artList
  const matchingArt = findArtListMatch(searchString);
  displayMatchingItems(matchingArt);
};

// watch search bar input and filter items 
searchBar.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const searchString = e.target.value;
    console.log(searchString);
    console.log(artList);

    // find matching items form artList
    const matchingArt = findArtListMatch(searchString);

    displayMatchingItems(matchingArt);
  } else {
    // when there are no matching results...
    console.log("no results");
    document.getElementById("artname-text").innerHTML = "Art not found";
  }
});