const user = {
  username: "dracarys",
  price: 100,
  getPrice: function () {
    return this.price;
  },
};

// Arrow functions do not have their own 'this' context. They inherit 'this' from the surrounding scope.
const getPriceArrow = () => {
  return this.price; // 'this' does not refer to the user object here
};

console.log("Regular function:", user.getPrice()); // 100
console.log("Arrow function:", getPriceArrow()); // undefined (or may refer to global object in non-strict mode)
const details = {
  name: "Alice",
  age: 30,
  welcome: function () {
    console.log(`Welcome, ${this.name}!`); // 'this' refers to details object
  },
};

details.welcome(); // Welcome, Alice!
details.name = "Mikasa"; // context changes
details.welcome(); // Welcome, Mikasa!
