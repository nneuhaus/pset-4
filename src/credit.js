const readlineSync = require ("readlline-sync");

const MAX = 1000000000000;
const MIN = 9999999999999999;

let cardNumber = Number(readlineSync.question("\nNumber: "));
let sum = 0;
let times2;
let newStringOfNumbers = "";
let sumOfDigitsNotMultipliedByTwo = 0;

while (cardNumber < MIN || cardNumber >= MAX || Number.isInteger(cardNumber) == false || Number.isNaN(cardNumber) == true) {
  cardNumber = Number(readlineSync.question("Number: "));
}
cardNumber = String(cardNumber);
let numberOfDigits = cardNumber.length;

//performs calculations
for (let i = numberOfDigits - 2; i >= 0; i -= 2) {
  digit = cardNumber.charAt(i);
  digit = Number(digit);
  times2 = digit * 2;
  times2 = String(times2);
  newStringOfNumbers = newStringOfNumbers + times2;
}

for (let k = newStringOfNumbers.length + 1; k >= 0; k--) {
  digit = newStringOfNumbers.charAt(k);
  digit = Number(digit);
  sum = sum + digit;

}
for (let j = numberOfDigits + 1; j >= 0; j -= 2) {
  digit = cardNumber.charAt(j);
  digit = Number(digit);
  sumOfDigitsNotMultipliedByTwo = sumOfDigitsNotMultipliedByTwo + digit;
}

checkSum = sum + sumOfDigitsNotMultipliedByTwo;
checkSum = String(checkSum);

//check if the card number is valid
let valid = (checkSum.endsWith("0") == true) ? true : false;

//determine which card it is
if (valid == true) {

  if (numberOfDigits == 15 && cardNumber.startsWith("34") == true || cardNumber.startsWith("37") == true) {
    console.log("\nAmex.\n");
  }
  else if (numberOfDigits == 13 || numberOfDigits == 16 && cardNumber.startsWith("4") == true) {
    console.log("\nVisa.\n");
  }
  else {
    console.log("\nMastercard.\n");
  }
}
else {
  console.log("\nInvalid.\n");
}
