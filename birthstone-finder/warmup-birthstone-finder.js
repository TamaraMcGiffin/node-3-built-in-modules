/* -------------------------
💎 Birthstone Finder
----------------------------
Create a program that determines the birthstone for a month inputted by the user. 

Check the README.md file for instructions.
------------------------- */

// birthstone data object
const birthstones = {
  January: "Garnet",
  February: "Amethyst",
  March: "Aquamarine",
  April: "Diamond",
  May: "Emerald",
  June: "Pearl, Alexandrite, or Moonstone",
  July: "Ruby",
  August: "Peridot",
  September: "Sapphire",
  October: "Opal or Tourmaline",
  November: "Topaz or Citrine",
  December: "Tanzanite, Zircon, or Turquoise",
};

// 3rd command line in the array
const birthMonth = process.argv[2];

if (!birthMonth) {
  console.log("Invalid month. Please enter a valid month.");

  // process exit used inside of an if code block, reccomended built in function in node for handling errors and stops the node process instead of running itcontinuously 
  process.exit(1);
}

// Birth month kept coming back invalid, adjusted code from const monthKey = birthMonth so that key months will be recognized
const monthKey =
  birthMonth.charAt(0).toUpperCase() + birthMonth.slice(1).toLowerCase();

const birthstone = birthstones[monthKey];

if (birthstone) {
  console.log(`The birthstone for ${monthKey} is ${birthstone}.`);
} else {
  console.log("Invalid month. Please enter a valid month.");
}
