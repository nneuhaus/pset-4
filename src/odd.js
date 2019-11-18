const readlineSync = require("readline-sync");
const MIN = -9007199254740991;
const MAX = 9007199254740991;
Pos = Number(readlineSync.question("\nPositive integer: "));
let Sum = 0;
let Digit = 0;

while (Number.isNaN(Pos) || !Number.isInteger(Pos) || Pos > MAX || Pos < MIN) {
  Pos = Number(readlineSync.question("Positive integer: "));
}
while (Pos != 0) {
  Digit = Pos % 10;
  Pos = Math.floor(Pos / 10);

  if (Digit % 2 != 0) {

    Sum = Sum + Digit
  }
}

console.log("\n" + Sum + ".\n");
