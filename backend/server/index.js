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
    const url = `https://robohash.org/${input}?anysize=200x200`;
    fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
            img.src = url.createObjectURL(blob);
            document.body.appendChild(img);
        });
