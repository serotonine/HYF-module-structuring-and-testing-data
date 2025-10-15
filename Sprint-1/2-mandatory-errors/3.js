const cardNumber = 4533787178994213;
/* cardNumber is a number but slice() is a String method. */
/* TypeError: cardNumber.slice is not a function. */
//const last4Digits = cardNumber.slice(-4);
const last4Digits = cardNumber.toString().slice(-4);
/* Another way to cast a number (string + number == string) */
const otherLast4Digits = `${cardNumber}`.toString().slice(-4);
const anotherLast4Digits = ("" + cardNumber).slice(-4);
/* Check if ok */
console.log(last4Digits);
console.log(otherLast4Digits);
console.log(anotherLast4Digits);


// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
