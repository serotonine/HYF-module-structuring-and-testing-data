const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
console.log(paddedPenceNumberString.charAt(0));


const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
/* 
 * 2. const penceStringWithoutTrailingP = penceString.substring( penceString.length - 1);
  * Assign the penceStringWithoutTrailingP variable to  string penceString trailing last char of it.
  * length of penceString - 1 because index begins to 0
  * String method substring() parameter does not accept negative index (unlike slice)
  * String method substring() returns charAt(3) to the end.
  * penceString is not muted (remains the same).
  * 
 * 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  * penceStringWithoutTrailingP.padStart(3, "0") = add (number - string.length) "0"
  * Here penceStringWithoutTrailingP.length = 3 so 3 - 3 = nothing to add.
  * useful to add 0 if the price < 1 pound (Impossible nowadays).

 * 4. const pounds = paddedPenceNumberString.substring( 0, paddedPenceNumberString.length - 2);
  * String method substring() returns charAt(0) to charAt(1)(3- 1) non inclusif,
  * Equivalent to substring( 0, 1);
  * Equivalent to paddedPenceNumberString.charAt(0);

 * 5. const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
  * String method substring() returns the 2 last char of the string.
  * Here the pences.
  * padEnd(2, "0") same system than above but add "0" at the end if the string.length < 2
  * E.g. "9" => "90".

 * 6. console.log(`£${pounds}.${pence}`);
  * Display in the console currency + pound's value + separator + pence's value
  * thanks to the template literals ``.

*/
