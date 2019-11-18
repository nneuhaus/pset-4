const readlineSync = require("readline-sync");
const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
Pos = Number(readlineSync.question("\nPositive integer: "));
let Order = "";
let Digit;

while (Pos < 0 || Number.isNaN(Pos) || Pos > MAX || !Number.isInteger(Pos) ) {
  Pos = Number(readlineSync.question("Positive integer: "));
}
while (Pos > 0){
  Digit = Pos % 10;
  Pos = Math.floor(Pos / 10);
  if (Pos >= 1){
    Order = Order + Digit + ", ";
  }
  else {
    Order = Order + Digit + ".\n";
  }
}
console.log("\n" + Order);
