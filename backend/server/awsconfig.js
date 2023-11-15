// Whole-script in strict mode syntax
"use strict";

// stopping maintenance notification when using aws-sdk
const SDK = require("aws-sdk");
require("aws-sdk/lib/maintenance_mode_message").suppress = true;

import AWS from "aws-sdk";
const client = new AWS.DynamoDB();
const response = await client.listTables({}).promise();
