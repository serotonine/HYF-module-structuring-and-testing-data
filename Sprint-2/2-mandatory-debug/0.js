// Predict and explain first...

// The result of multiplying 10 and 32 is undefined

/* function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); */

// No return in the function

// Finally, correct the code to fix the problem
function multiply(a, b) {
  return (a * b);
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
