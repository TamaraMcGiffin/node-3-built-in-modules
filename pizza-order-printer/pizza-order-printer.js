/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */

import fs from "fs/promises";

const pizzaOrders = process.argv[2];
console.log(pizzaOrders);

// Removed async & await to get console log data first - NOTE: Must use async & await to get successful data console log to show

async function getAllOrders() {
  const data = await fs.readFile("./data.json", "utf8");
  // console.log(data)
  const parsedData = JSON.parse(data);

  console.log(parsedData);
}

getAllOrders();

async function getOneOrder() {
  const data = await fs.readFile("./data.json", "utf8");
  const parsedData = JSON.parse(data);
}

getOneOrder();
