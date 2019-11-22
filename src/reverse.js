const readlineSync = require("readline-sync");
const MIN = 1;
const MAX = 9007199254740991;
positive = Number(readlineSync.question("\nPositive integer: "));
let order = "";
let digit;

while (positive < 0 || Number.isNaN(positive) || positive > MAX || !Number.isInteger(positive) ) {

  positive = Number(readlineSync.question("Positive integer: "));

}
while (positive > 0){

  digit = positive % 10;
  positive = Math.floor(positive / 10);
  if (positive >= 1){

    order = order + digit + ", ";

  }

  else {

    order = order + digit + ".\n";

  }
}
console.log("\n" + order);
