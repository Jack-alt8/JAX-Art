// Whole-script strict mode syntax
"use strict";

// robot api
const input = "dd";
const img = document.getElementById("apiImage");
const url = `https://robohash.org/${input}?anysize=200x200`;
fetch(url)
  .then((response) => response.blob())
  .then((blob) => {
    img.src = URL.createObjectURL(blob);
    // console.log(api);
    console.log(apiImage);
  });
