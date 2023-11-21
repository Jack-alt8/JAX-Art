// Whole-script in strict mode syntax
"use strict";

// dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// retrieve api and display
    const input = document.getElementbyId("robohash-input");
    const img = document.createElement('img');
    const url = `https://robohash.org/${input}?size=200x200`;
    fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
            img.src =url.createObjectURL(blob);
            document.body.appendChild(img);
        });
