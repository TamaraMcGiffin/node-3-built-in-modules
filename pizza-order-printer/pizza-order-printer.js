/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */

import fs from "fs/promises";

const userInput = process.argv[2];
const pizzaOrderInput = process.argv[3];
// Removed a console.log from here after checking - showed up as 'undefined' in getAllOrders, debugged solution

async function printPizzaOrder() {
  if (!userInput) {
    console.log("[getAllOrders | getOneOrder <index>]");
    return;
  }

  try {
    const data = await fs.readFile("./data.json", "utf8");
    const orders = JSON.parse(data);

    if (userInput === "getAllOrders" && !pizzaOrderInput) {
      for (const order of orders) {
        console.log(order);
      }
    } else if (userInput === "getOneOrder" && pizzaOrderInput) {
      const index = parseInt(pizzaOrderInput, 10);

      if (
        Number.isInteger(index) &&
        index >= 0 &&
        orders[index] !== undefined
      ) {
        console.log(`Pizza Order: ${orders[index]}`);
      } else {
        console.log("Order not found. Please enter a valid order number.");
      }
    }
  } catch (error) {
    console.log(error);
  }
}

printPizzaOrder();
