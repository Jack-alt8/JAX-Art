//turning on strict mode
"use strict";

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

//search button functionality (computer)
const computertoggleSearch = document.getElementById("computer-toggle-search");

computertoggleSearch.addEventListener("click", () =>
  search.classList.toggle("active")
);

const searchForm = document.getElementById("searchform");
const searchBar = document.getElementById("searchbar");
const result = document.getElementById("result");

// list of artimages tagged with descriptions
const artList = [
  {
    imgsrc: "../artimages/alice-donovan-rouse-unsplash.jpg",
    name: "Hico Jill",
    size: "600px by 400px",
    type: "Collage",
    date: "01/03/20",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/birmingham-museums-trust-field-unsplash.jpg",
    name: "Grain Fields",
    size: "800px by 400px",
    type: "Landscape",
    date: "11/07/21",
    listenedto: "",
    series: "Birmingham series",
  },
  {
    imgsrc: "../artimages/birmingham-museums-trust-mountain-path-unsplash.jpg",
    name: "Mountain path",
    size: "600px by 400px",
    type: "Landscape",
    date: "11/10/21",
    listenedto: "",
    series: "Birmingham series",
  },
  {
    imgsrc: "../artimages/birmingham-museums-trust-mountain-river-unsplash.jpg",
    name: "Mountain river",
    size: "200px by 400px",
    type: "Landscape",
    date: "11/13/21",
    listenedto: "",
    series: "Birmingham series",
  },
  {
    imgsrc:
      "../artimages/birmingham-museums-trust-mountain-waterfall-unsplash.jpg",
    name: "Mountain waterfall",
    size: "200px by 400px",
    type: "Landscape",
    date: "11/15/21",
    listenedto: "",
    series: "Birmingham series",
  },
  {
    imgsrc: "../artimages/birmingham-museums-trust-sheep-herder-unsplash.jpg",
    name: "Sheep Herder",
    size: "250px by 400px",
    type: "Landscape",
    date: "11/20/21",
    listenedto: "",
    series: "birmingham series",
  },
  {
    imgsrc: "../artimages/birmingham-museums-trust-trees-unsplash.jpg",
    name: "Faded trees",
    size: "250px by 400px",
    type: "Landscape",
    date: "11/27/21",
    listenedto: "",
    series: "Birmingham series",
  },
  {
    imgsrc: "../artimages/geordanna-spirit-unsplash.jpg",
    name: "Spirit",
    size: "250px",
    type: "Painting/ Abstract art",
    date: "04/24/22",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/jason-leung-unsplash.jpg",
    name: "Love the Corner",
    size: "200px by 400px",
    type: "Photography",
    date: "09/30/23",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/joel-filipe-unsplash.jpg",
    name: "Sun Splash",
    size: "250px by 400pc",
    type: "Digital art",
    date: "10/01/23",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/maria-orlova-unsplash.jpg",
    name: "Purple Foam",
    size: "200px by 400px",
    type: "Painting/ Abstract art",
    date: "10/28/23",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/meric-dagli-unsplash.jpg",
    name: "True Feeling",
    size: "200px by 400px",
    type: "Digital art/ Abstract art",
    date: "11/09/23",
    listenedto: "",
    series: "",
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

// displaying none when reset button is clicked
searchBar.addEventListener("input", function (e) {
  const pattern = /^[\w\W]{2,15}$/;
  const currentValue = e.target.value;
  const valid = pattern.test(currentValue);

  if (valid) {
    const searchString = e.target.value.toLowerCase();

    // logging array data on console
    console.log(searchString);
    console.log(artList);

  } else {
    resultImage.style.display = "none";
    document.getElementById("result-image").setAttribute("src", "");
    document.getElementById("artname-text").innerHTML = "";
    document.getElementById("size-text").innerHTML = "";
    document.getElementById("type-of-art-text").innerHTML = "";
    document.getElementById("date-text").innerHTML = "";
    document.getElementById("listened-to-text").innerHTML = "";
    document.getElementById("series-text").innerHTML = "";
    e.preventDefault();
    return false;
  }
});