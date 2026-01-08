console.log("Business Name Generator");

// Adjective
const adjNames = {
  adj1: "Crazy",
  adj2: "Amazing",
  adj3: "Fire",
};

// Shop
const shopNames = {
  shop1: "Engine",
  shop2: "Foods",
  shop3: "Garments",
};

// Trademark
const tmNames = {
  tm1: "Bros",
  tm2: "Limited",
  tm3: "Hub",
};

// Randomizer Object
const randomness = {
  randomAdj: Math.random() * 15,
  randomShop: Math.random() * 15,
  randomTrademark: Math.random() * 15,
};

// Function to randomize Adjectives based on the relevant odds
function randomizeAdj() {
  if (randomness.randomAdj >= 0 && randomness.randomAdj <= 5) {
    return adjNames.adj1;
  } else if (randomness.randomAdj > 5 && randomness.randomAdj <= 10) {
    return adjNames.adj2;
  } else if (randomness.randomAdj > 10 && randomness.randomAdj <= 15) {
    return adjNames.adj3;
  }
}

// Function to randomize ShopNames based on the relevant odds
function randomizeShop() {
  if (randomness.randomShop >= 0 && randomness.randomShop <= 5) {
    return shopNames.shop1;
  } else if (randomness.randomShop > 5 && randomness.randomShop <= 10) {
    return shopNames.shop2;
  } else if (randomness.randomShop > 10 && randomness.randomShop <= 15) {
    return shopNames.shop3;
  }
}

// Function to randomize Trademarks based on the relevant odds
function randomizeTM() {
  if (randomness.randomTrademark >= 0 && randomness.randomTrademark <= 5) {
    return tmNames.tm1;
  } else if (
    randomness.randomTrademark > 5 &&
    randomness.randomTrademark <= 10
  ) {
    return tmNames.tm2;
  } else if (
    randomness.randomTrademark > 10 &&
    randomness.randomTrademark <= 15
  ) {
    return tmNames.tm3;
  }
}

console.log(
  `Generated Business Name: ${randomizeAdj()} ${randomizeShop()} ${randomizeTM()}`
);

/*
  Task Learnings:
  1. Objects: Storing related data (names) in key-value pairs.
  2. Functions: Encapsulating logic to be reused (randomizeAdj, etc).
  3. Math.random(): Generating random numbers to pick options.
  4. Conditionals: Using if/esilse if to map random numbers to specific choices.
  5. Template Literals: dynamic string creation with backticks to combine results.
*/
