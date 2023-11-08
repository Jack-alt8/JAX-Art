// Whole-script strict mode syntax
"use strict";

/**
 * (SDK)
 * 1. Follow aws instructions to request an item in my aws bucket
 * 2. Hide my aws credentials using .env (I would need to add this to ignore file)
 * 3. Move my frontend code to my frontend folder and make a backend folder and add my images there
 * 4. Update my github action to only on late changes to the backend/images folder
 * 5. Update my github action to delete all the images before uploading
 */

/**
 * ---------------------------------------------------------------------------------------------------
 * dotenv config
 * ---------------------------------------------------------------------------------------------------
 */
require("dotenv").config();
const express = require("express");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const app = express();
const port = 3000;

const api = require("./api");

app.use(express.json());

//replace https with url for where I host website
const whitelist = ["http://127.0.0.1", "http://127.0.0.1:5500"];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const limiter = rateLimit({
  windowMs: 1000,
  max: 1,
});
app.use(limiter);

//test route
app.get("/", (req, res) => res.json({ success: "Hello World!" }));

app.use("/api", api);

app.listen(port, () => console.log(`App listening on port ${port}`));

/**
 * -----------------------------------------------------------------------------------------------------
 * Requesting an item in aws bucket
 * -----------------------------------------------------------------------------------------------------
 */
