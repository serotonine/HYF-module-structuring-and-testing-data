// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPound(pences){

  const penceWithoutTrailingP = pences.substring( 0,pences.length - 1);
  const paddedPenceNumberStr = penceWithoutTrailingP.padStart(3, "0");
  const pounds = paddedPenceNumberStr.substring( 0, paddedPenceNumberStr.length - 2 );
  const pence = paddedPenceNumberStr
    .substring(paddedPenceNumberStr.length - 2)
    .padEnd(2, "0");

  return `£${pounds}.${pence}`;
}
const pences = ["399p", "1600p", "50p", "200p"];
 for (p of pences){
  console.log(`${p} is ${toPound(p)}`);
 }