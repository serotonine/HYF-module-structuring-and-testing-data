let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange} %`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? 
// Write down all the lines where a function call is made.
/*
 * line 4 & 5 => replaceAll() - String method.
 * line 4 & 5 => Number() - built-in constructor function
 * line 10 => console.log() - built-in constructor function
*/

// b) Run the code and identify the line where the error is coming from
//  why is this error occurring? How can you fix this problem?
/*
 * line 5 => Miss a comma in arguments declaration.
*/

// c) Identify all the lines that are variable reassignment statements
/*
 * lines 4 & 5 => carPrice & priceAfterOneYear are reassigned.
*/

// d) Identify all the lines that are variable declarations
/*
 * lines 1 & 2 => carPrice & priceAfterOneYear.
 * lines 7 & 8 => priceDifference & percentageChange.
*/

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing
//  what is the purpose of this expression?
/*
 * Cast a string to Number.
*/
