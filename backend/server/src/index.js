// Whole-script in strict mode syntax
"use strict";

// dependencies 
/*
import express from "express";
import router from "express.Router";
import fetch from "node-fetch";
import bodyParser from "body-parser";
import cors from "cors";
import { send } from "process";
import dotenv from "dotenv";
const app = express();
*/

const input = document.getElementById("robohash-input");
const img = document.createElement("img");
const url = `https://robohash.org/${input}?anysize=200x200`;
const sendGetRequest = fetch(url)
  .then((response) => response.blob())
  .then((blob) => {
    img.src = URL.createObjectURL(blob);
    document.body.appendChild(img);
  });

// retrieve api and display 
/*
const sendGetRequest = fetch(
  `https://robohash.org/${input}?anysize=200x200`
);
*/

// request button or robot generator
const request = document.getElementById("request-button");
request.addEventListener("click", sendGetRequest);



/*
const fetchApi = async (searchText) => {
  const url = "=${searchText}&=${process.env.AWS_ACCESS_ID}";
  try {
    const apiStream = await fetch(url);
    const apiJson = await apiStream.json();
    return appJson;
  } catch (err) {
    return { Error: err.stack };
  }
};
*/

router.get("/", (req, res) => {
  res.json({ success: "Hello Api!" });
});

router.get("/:searchText", async (req, res) => {
  const searchText = req.params.searchText;
  const data = await sendGetRequest(searchText);
  res.json(data);
});

router.post("/", async (req, res) => {
  const searchText = req.body.searchText;
  const data = await sendGetRequest(searchText);
  res.json(data);
});

module.exports = router;
