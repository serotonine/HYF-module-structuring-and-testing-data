
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// '3' is a number not an argument.

/* function square(3) {
    return num * num;
} */

// SyntaxError: Unexpected number

// '3' is a number not an argument. 
// An argument is a variable and must not begin with a number.
// the var 'num' is coming from nowhere.

// Finally, correct the code to fix the problem

function square(num) {
    return num * num;
}

console.log(square(3));

