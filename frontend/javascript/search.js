//turning on strict mode
"use strict";

// list of artimages tagged with descriptions
const searchBar = document.getElementById("searchbar");
const artList = [
  {
    imgsrc:
      "../backend/artimages/Abstract_art/untitled_series/untitled_10.png",
    name: "Untitled1",
    size: "100px by 100px",
    type: "Digital Art",
    date: "2023",
    listenedto: "",
    series: "Untitled Series"
  },
  {
    imgsrc:
      "../backend/artimages/Abstract_art/untitled_series/untitled_11.png",
    name: "Untitled2",
    size: "100px by 100px",
    type: "Digital Art",
    date: "2022",
    listenedto: "",
    series: "Untitled Series"
  },
];
let searchString = ""
// grabbing list of artworks with their descriptions

function findArtListMatch(searchString) {
  const matchingArt = artList.filter(
    (art) =>
      art.name.toLowerCase().includes(searchString.toLowerCase()) ||
      art.size.toLowerCase().includes(searchString.toLowerCase()) ||
      art.type.toLowerCase().includes(searchString.toLowerCase()) ||
      art.date.toLowerCase().includes(searchString.toLowerCase()) ||
      art.listenedto.toLowerCase().includes(searchString.toLowerCase()) ||
      art.series.toLowerCase().includes(searchString.toLowerCase())
  );
  return matchingArt;
}

// displaying descriptions and image attached

//grabbing html elements for displaying
const resultImage = document.getElementById("result-image");
const artNameText = document.getElementById("artname-text");
const sizeText = document.getElementById("size-text");
const typeOfArtText = document.getElementById("type-of-art-text");
const dateText = document.getElementById("date-text");
const listenedToText = document.getElementById("listened-to-text");
const seriesText = document.getElementById("series-text");

function displayArt(matchingArt) {
  if (matchingArt.length > 0) {
    // display the matching items
    matchingArt.forEach((art) => {
      // display the right artimage per search
      resultImage.setAttribute("src", art.imgsrc);

      // show the description of the art
      artNameText.innerHTML = art.name;
      sizeText.innerHTML = art.size;
      typeOfArtText.innerHTML = art.type;
      dateText.innerHTML = art.date;
      listenedToText.innerHTML = art.listenedto;
      seriesText.innerHTML = art.series;
    });
  } else {
    // when there are no matching results...
    console.log("no results");
    resultImage.style.display = "none";
    document.getElementById("result-image").setAttribute("src", "");
    document.getElementById("artname-text").innerHTML = "Art not found";
    document.getElementById("size-text").innerHTML = "";
    document.getElementById("type-of-art-text").innerHTML = "";
    document.getElementById("date-text").innerHTML = "";
    document.getElementById("listened-to-text").innerHTML = "";
    document.getElementById("series-text").innerHTML = "";
  }
};

// search button
const searchButton = document.getElementById("searchbutton");

searchButton.addEventListener("click", (e) => {
  const pattern = /^[\w\W]{2,15}$/;
  const currentValue = e.target.value;
  const valid = pattern.test(currentValue);

  if (valid) {
    console.log("clicked");
    const searchString = document.getElementById("searchbar").value;
    console.log(searchString);
    console.log(artList);

    // stop hidden style on image
    resultImage.style.display = "block";

    const matchingArt = findArtListMatch(searchString);
    displayArt(matchingArt);
  } else {
    // when the input is empty
    console.log("no results");
    resultImage.style.display = "none";
    document.getElementById("result-image").setAttribute("src", "");
    document.getElementById("artname-text").innerHTML = "";
    document.getElementById("size-text").innerHTML = "";
    document.getElementById("type-of-art-text").innerHTML = "";
    document.getElementById("date-text").innerHTML = "";
    document.getElementById("listened-to-text").innerHTML = "";
    document.getElementById("series-text").innerHTML = "";
  }
});

// watch search bar input and filter items
searchBar.addEventListener("keyup", (e) => {
  const pattern = /^[\w\W]{2,15}$/;
  const currentValue = e.target.value;
  const valid = pattern.test(currentValue);

  if (e.key === "Enter" && valid) {
    const searchString = e.target.value.toLowerCase();

    // logging array data on console
    console.log(searchString);
    console.log(artList);

    // stop hidden style on image
    resultImage.style.display = "block";

    // find matching items form artList
    const matchingArt = findArtListMatch(searchString);
    displayArt(matchingArt);
  } else {
    // when the input is empty
    console.log("no results");
    resultImage.style.display = "none";
    document.getElementById("result-image").setAttribute("src", "");
    document.getElementById("artname-text").innerHTML = "";
    document.getElementById("size-text").innerHTML = "";
    document.getElementById("type-of-art-text").innerHTML = "";
    document.getElementById("date-text").innerHTML = "";
    document.getElementById("listened-to-text").innerHTML = "";
    document.getElementById("series-text").innerHTML = "";
  }
});