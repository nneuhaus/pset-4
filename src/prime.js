const readlineSync = require ("readline-sync");
const MAX = 9007199254740991;
const MIN = 1

let Integer = Number(readlineSync.question("\nNon-negative number: "));
let Result = 0;

for (let x = 2; x <= Integer/2; x++){
  Integer = Integer % x;
  if (Integer == 0){
    console.log("\nNot Prime.");
    Result = 1;
  }
}
if (Result == 0){
  console.log("\nPrime."); }
