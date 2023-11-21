// Whole-script in strict mode syntax
"use strict";

// dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { send } = require("process");
require("dotenv").config();

// request button or robot generator
const request = document.getElementById("request-button");
request.addEventListener("click", sendGetRequest);

// retrieve api and display 

    const input = document.getElementById("robohash-input");
    const img = document.createElement('img');
    const url = `https://robohash.org/${input}?anysize=200x200../../frontend/photos`;
    fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
            img.src = url.createObjectURL(blob);
            document.body.appendChild(img);
        });
/*
const input = document.getElementById("request-button");
const url = `https://robohash.org/${input}?anysize=200x200../../frontend/photos`;
fetch(url)
  .then((response) => response.blob())
  .then((blob) => {
    apiImage = blob[0].url;
    document.getElementById("apiImage").src = apiImage;
    // console.log(data);
    console.log(apiImage);
  });
*/