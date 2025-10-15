let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.
/* So many ways to get the first char of a string ! */
let initials = `${firstName.charAt(0)}${middleName[0]}${lastName.slice(0, 1)}`;
/* Check if ok */
console.log(initials);

// https://www.google.com/search?q=get+first+character+of+string+mdn

