// Whole-script in strict mode syntax
"use strict";

// api and dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dnltdvkyt',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

cloudinary.uploader.upload