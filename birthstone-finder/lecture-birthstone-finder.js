/* -------------------------
💎 Birthstone Finder
----------------------------
We will refactor the Birthstone Finder app to read birthstone data from a separate JSON file.

We'll practice: 
- using a built-in node module called fs, file system
- read data form a file
- practice ES module syntax vs. CommonJS syntax, which are both for accessing Node Modules
------------------------- */

// two ways for accessing a Node Module

// old way, CommonJS
// const fs = require("fs/promises");

// new way, ES Modules
import fs from "fs/promises";

const oneInput = process.argv[2];

// Read birthstone data from the data.json file, and get the birthstone for the user-inputted month
async function getBirthstone() {
  // the readFile method is part of the fs object.
  // It takes in 2 parameters:
  // 1. The file we want to read from
  // 2. The way the file is encoded
  const data = await fs.readFile("./data.json", "utf8");

  // We need to parse the JSON data into Javascript
  const parsedData = JSON.parse(data);

  parsedData[month]
    ? console.log(`The birthstone for ${month} is ${parsedData[month]}`)
    : console.log("Invalid month. Please enter a valid month name.");
}

// Call the function!
getBirthstone();
