const readlineSync = require("readline-sync");
const MIN = -9007199254740991;
const MAX = 9007199254740991;
positive = Number(readlineSync.question("\nPositive integer: "));
let sum = 0;
let digit = 0;

while (Number.isNaN(positive) || !Number.isInteger(positive) || positive > MAX || positive < MIN) {

  positive = Number(readlineSync.question("Positive integer: "));

}
while (positive != 0) {
  digit = positive % 10;
  positive = Math.floor(positive / 10);

  if (digit % 2 != 0) {

    sum = sum + digit

  }
}

console.log("\n" + sum + ".\n");
