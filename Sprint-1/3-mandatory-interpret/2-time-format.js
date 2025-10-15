const movieLength = -8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/*
 * 6 variable's declarations:
 * movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result.
*/

// b) How many function calls are there?
/*
 * Only console.log()
*/

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
/*
 * Modulo (%) is use to return the rest number of a division.
 * 8784 % 60 = 8784 - (60 × Math.floor(8784 / 60));
*/
console.log( "\nModule explained");
console.log("8784 % 60 =" ,8784 - (60 * Math.floor(8784 / 60)));


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/*
 * The rest number are the seconds.
 * We substract them to the time length then timelength / 60 result 
 * is minutes (60 seconds in a minute).
*/

// e) What do you think the variable result represents? 
// Can you think of a better name for this variable?
 /* getClockTime() */

// f) Try experimenting with different values of movieLength. 
// Will this code work for all values of movieLength? Explain your answer
/*
 * Yes but the result display is not optimal in case 
 * movieLength = 0 ormovieLength < 0 or totalHours === 0 or some of the value < 10.
*/
