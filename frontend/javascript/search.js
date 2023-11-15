/**
 * Edit code for art list
 */
//turning on strict mode
"use strict";

const searchBar = document.getElementById("searchBar");
let foodList = [];
let searchString = "";

fetch("./foodList.json")
  .then((res) => res.json())
  .then((data) => {
    foodList = data;
  });

function findFoodListMatch(searchString) {
  const matchingFood = foodList.filter((food) =>
    food.name.toLowerCase().includes(searchString.toLowerCase())
  );
  return matchingFood;
}

function displayMatchingItems(matchingFood) {
  if (matchingFood.length > 0) {
    // Display the matching items
    matchingFood.forEach((food) => {
      // console.log(food.name, food.description);
      document.getElementById("foodName").innerHTML = food.name;
      document.getElementById("canEat").innerHTML = food.canEat;
      document.getElementById("description").innerHTML = food.description;
      addStylingToResult();
    });
  } else {
    console.log("no matching food");
    document.getElementById("canEat").innerHTML = "";
    document.getElementById("foodName").innerHTML = "Food not found";
  }
}

function onSearchButtonClick() {
  console.log("clicked");
  const searchString = document.getElementById("searchBar").value;
  console.log(searchString);
  console.log(foodList);

  // Find the matching items in the foodList
  const matchingFood = findFoodListMatch(searchString);
  displayMatchingItems(matchingFood);
}

// listening for search bar input and attempting to filter

searchBar.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const searchString = e.target.value;
    console.log(searchString);
    console.log(foodList);

    // Find the matching items in the foodList
    const matchingFood = findFoodListMatch(searchString);

    displayMatchingItems(matchingFood);
  }
  // Handle the case when no matching items a
});

// fetching the featured image

fetch("https://api.thedogapi.com/v1/images/search")
  .then((res) => res.json())
  .then((data) => {
    featuredImage = data[0].url;
    document.getElementById("featuredImage").src = featuredImage;
    // console.log(data);
    console.log(featuredImage);
  });

// Add a red or green color class to the "yes" or "no" portion of the result

function addStylingToResult() {
  if (document.getElementById("canEat").innerHTML === "Yes") {
    console.log("got it");
    document.getElementById("canEat").className = "yes";
  } else {
    console.log("dont got it");
    document.getElementById("canEat").className = "no";
  }
}
