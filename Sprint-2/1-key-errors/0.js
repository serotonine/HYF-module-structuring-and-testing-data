// Predict and explain first...
//  Guess init a variable with the same name than the argument is not a good idea.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/* function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
} */

// SyntaxError: Identifier 'str' has already been declared
 function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
} 
console.log(capitalise("hello world"));