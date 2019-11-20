const readlineSync = require("readline-sync");

const MIN = 0
const MAX = 9007199254740991

let Sum = 0
let Integer = 0;
let NumberValues = 0;

console.log("\n");

while (Integer >= MIN && Integer <= MAX) {
  Integer = readlineSync.question("Non-negative integer: ")

  if (Integer >= MIN && Integer <= MAX) {
     Sum = parseFloat(Sum) + parseFloat(Integer);
        ++NumberValues


    } else if (NumberValues == 0 && Integer < 0){

      Integer = readlineSync.question("Non-negative integer: ");

    } else if (NumberValues > 1 && Integer > MAX) {

      Integer = readlineSync.question("Non-negative integer: ");

    } else {
  }
}

let Average = Sum / NumberValues

Average = Average.toLocaleString("en", {minimumFractionDigits: 3, maximumFractionDigits: 3});



console.log("\n" + Average + ".\n");
