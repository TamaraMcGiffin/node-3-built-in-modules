# 🍕 Pizza Order Printer

## 📌 Your Task

In this exercise, you’ll create a Node.js app that reads pizza order data from a JSON file and prints it to the command line.  

Your app should:

- Take user input with `process.argv`
- Import the `fs/promises` Node module
- Use `fs.readFile()` to read data from a `data.json` file

### Your program should behave as follows:

- If the user enters **one input**, `getAllOrders`,  
  it should print **all pizza orders**, with each order on a new line.

- If the user enters **two inputs**, for example `getOneOrder 5`,  
  it should print **only the order at that index** from the data file.

---

## 🧠 Learning Goals

You will practice:

* Using `process.argv` to take user input
* Importing and using the `fs/promises` Node module
* Reading and handling data from a JSON file

---

## 📖 Test Cases

### 1. Running `node pizzaOrders.js getAllOrders` should output:
```bash
Margherita - extra cheese
Pepperoni - no olives
Veggie - gluten-free crust
```

### 2. Running `node pizzaOrders.js getOneOrder 2` should output:
```bash
Veggie - gluten-free crust
```

### 3. Running `node pizzaOrders.js getOneOrder 10` should output an error message:
```bash
Order not found. Please enter a valid order number.
```
