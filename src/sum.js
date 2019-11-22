const readlineSync = require("readline-sync");
const MIN = -9007199254740991;
const MAX = 9007199254740991;
let lower=Number(readlineSync.question("\nLower Bound: "));
let upper=Number(readlineSync.question("Upper Bound: "));
let sum=0

while (lower > upper ) {

    lower=Number(readlineSync.question("Lower Bound: "));
    upper=Number(readlineSync.question("Upper Bound: "));

    }
if (lower % 2 ===0){

  for (i=upper; i<=upper;i+=2) {
    sum= i + sum;
  }
}
else {
  for (i=lower+1 ; i<=upper ; i+=2){

  sum= i + sum

  }
}
sum= sum.toLocaleString("en");
console.log("\n" + sum+ ".\n");
