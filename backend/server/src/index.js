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
const app = express();
*/

// fetching robot image

const input = 'dd';
const img = document.getElementById("apiImage");
const url = `https://robohash.org/${input}?anysize=200x200`;
fetch(url)
  .then((response) => response.blob())
  .then((blob) => {
    img.src = URL.createObjectURL(blob);
    // console.log(api);
    console.log(apiImage);
  });

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
