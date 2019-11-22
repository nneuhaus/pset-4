const readlineSync = require ("readline-sync");
const MAX = 9007199254740991;
const MIN = 1

let integer = Number(readlineSync.question("\nNon-negative number: "));
let result = 0;

for (let x = 2; x <= integer/2; x++){

  integer = integer % x;

  if (integer == 0){

    console.log("\nNot Prime.");
    result = 1;

  }
}
if (result == 0){

  console.log("\nPrime.");

 }
