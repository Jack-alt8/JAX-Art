//turning on strict mode
"use strict";

const searchBar = document.getElementById("searchBar");
let artList = [];
let searchString = "";

fetch("art.json")
  .then((res) => res.json())
  .then((data) => {
    artList = data;
  });

function findartListMatch(searchString) {
  const matchingArt = artList.filter((art) =>
    art.name.toLowerCase().includes(searchString.toLowerCase())
  );
  return matchingart;
}

function displayMatchingItems(matchingArt) {
  if (matchingArt.length > 0) {
    // Display the matching items
    matchingArt.forEach((art) => {
      // console.log(art.name, art.description);
      document.getElementById("artName").innerHTML = art.name;
      document.getElementById("").innerHTML = art.;
      document.getElementById("description").innerHTML = art.description;
      addStylingToResult();
    });
  } else {
    console.log("no results");
    document.getElementById("").innerHTML = "";
    document.getElementById("artName").innerHTML = "Art not found";
  }
}

function onSearchButtonClick() {
  console.log("clicked");
  const searchString = document.getElementById("searchBar").value;
  console.log(searchString);
  console.log(artList);

  // Find the matching items in the artList
  const matchingArt = findArtListMatch(searchString);
  displayMatchingItems(matchingArt);
}

// listening for search bar input and attempting to filter

searchBar.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const searchString = e.target.value;
    console.log(searchString);
    console.log(artList);

    // Find the matching items in the artList
    const matchingArt = findArtListMatch(searchString);

    displayMatchingItems(matchingArt);
  }
  // Handle the case when no matching items a
});

// fetching the featured image

fetch("")
  .then((res) => res.json())
  .then((data) => {
    featuredImage = data[0].url;
    document.getElementById("featuredImage").src = featuredImage;
    // console.log(data);
    console.log(featuredImage);
  });

// Add a red or green color class to the "yes" or "no" portion of the result

function addStylingToResult() {
  if (document.getElementById("").innerHTML === "Yes") {
    console.log("got it");
    document.getElementById("t").className = "yes";
  } else {
    console.log("dont got it");
    document.getElementById("").className = "no";
  }
}
