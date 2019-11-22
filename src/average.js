const readlineSync = require("readline-sync");

const MIN = 0
const MAX = 9007199254740991

let sum = 0
let integer = 0;
let numberOfValues = 0;

console.log("\n");

while (integer >= MIN && integer <= MAX) {
  integer = readlineSync.question("Non-negative integer: ")

  if (integer >= MIN && integer <= MAX) {
     sum = parseFloat(sum) + parseFloat(integer);
        ++numberOfValues


    } else if (numberOfValues == 0 && integer < 0){

      integer = readlineSync.question("Non-negative integer: ");

    } else if (numberOfValues > 1 && integer > MAX) {

      integer = readlineSync.question("Non-negative integer: ");

    } else {
  }
}

let average = sum / numberOfValues

average = average.toLocaleString("en", {minimumFractionDigits: 3, maximumFractionDigits: 3});



console.log("\n" + average + ".\n");
