// Whole-script in strict mode syntax
"use strict";

// api and dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// stopping maintenance notification when using aws-sdk
const SDK = require("aws-sdk");
require("aws-sdk/lib/maintenance_mode_message").suppress = true;

/*
{
   "Version": "2012-10-17",
   "Statement": [
      {
         "Effect": "Allow",
         "Action": [
            "s3:ListBucket"
         ],
         "Resource": [
            "arn:aws:s3:::jackc.baylor-jax-art"
         ]
      }
   ]
};

[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "HEAD",
            "GET"
        ],
        "AllowedOrigins": [
            "*"
        ]
    }
];
*/
const { S3Client, ListObjectsCommand } = require("@aws-sdk/client-s3");
const { http } = require("./awsconfig");

const client = new S3Client({});
const input = {
  Bucket: "jackc.baylor-jax-art",
};
const command = new ListObjectsCommand(input);
const { Contents } = await client.send(command);
const response = {
  status: 200,
  body: Contents,
};
return response;

const http = "https://jackc.baylor-jax-art.s3.amazonaws.com/";
for (let i = 0; i < Contents.length; i++) {
  const id = Contents[i].Key;
  const src = `${http}${id}`;
}

app.get("/", function (request, response) {
  response.send("Hello World");
});

app.get("/albums", function (request, response) {
  response.send("Hello World");
});

app.listen(3000, function () {
  console.log("server running");
});

/**
 * 1. Install bodyparser in cors (look up npm bodyparser and npm cors to download) (done)
 * 2. Install aws-sdk v3 (done)
 * 3. Create a route to list all the albums
 * 
 * {
   "Version": "2012-10-17",
   "Statement": [
      {
         "Effect": "Allow",
         "Action": [
            "s3:ListBucket"
         ],
         "Resource": [
            "arn:aws:s3:::BUCKET_NAME"
         ]
      }
   ]
}

[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "HEAD",
            "GET"
        ],
        "AllowedOrigins": [
            "*"
        ]
    }
]

How do you do these actions in s3 using sdk?
Get all folders
Get all objects in a folder
Get a specific object by name/id

ListObjectsCommand

const { S3Client, ListObjectsCommand } = require('@aws-sdk/client-s3')

    const client = new S3Client({})
    const input = {
        Bucket: 'photo-album-sonny',
    }
    const command = new ListObjectsCommand(input)
    const { Contents } = await client.send(command)
    const response = {
        status: 200,
        body: Contents
    }
    return response

const url = '(aws bucket name url)'
    for(let i = 0; i < Contents.length; i++) {
        const id = Contents[i].Key
        const src = `${url}${id}`
    }






 * Clean up frontend, with excess code
 */
