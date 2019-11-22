const readlineSync = require("readline-sync");
const PHI = (Math.sqrt(5) + 1) / 2
const INVERSE_PHI = (Math.sqrt(5) - 1) / 2
let term = 0;

let number = Number(readlineSync.question("\nPositive integer: "));
while(number < 1 || number > 78){
  number = Number(readlineSync.question("Positive integer: "));
}
term = Math.ceil((Math.pow(PHI, number) - (Math.pow((INVERSE_PHI * -1), number))) / Math.sqrt(5));
term = term.toLocaleString("en", {maximumFractionDigits: 0, minimumFractionDigits: 0});
console.log("\n" + term + ".\n");
