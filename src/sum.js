const readlineSync = require("readline-sync");
const MIN = -9007199254740991;
const MAX = 9007199254740991;
let Low=Number(readlineSync.question("\nLower Bound: "));
let Up=Number(readlineSync.question("Upper Bound: "));
let Sum=0

while (Low > Up ) {
    Low=Number(readlineSync.question("Lower Bound: "));
    Up=Number(readlineSync.question("Upper Bound: "));
    }
if (Low % 2 ===0){
  for (i=Low; i<=Up;i+=2) {
    Sum = i + Sum;
  }
}
else {
  for (i=Low+1 ; i<=Up ; i+=2){
  Sum = i + Sum
  }
}
Sum = Sum.toLocaleString("en");
console.log("\n" + Sum + ".\n");
