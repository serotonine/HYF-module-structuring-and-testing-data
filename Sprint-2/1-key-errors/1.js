// Predict and explain first...

// Why will an error occur when this program runs?
// Variable 'decimalNumber' is already declared. And this declaration is no needed.
// console.log(decimalNumber); will throw an error. const is block scoped.

// Try playing computer with the example to work out what is going on

/* function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber); */

// SyntaxError: Identifier 'decimalNumber' has already been declared

// Finally, correct the code to fix the problem
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));

