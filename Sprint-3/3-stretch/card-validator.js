/* 
Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16.

For example, the following credit card numbers are valid:

9999777788880000
6666666666661666

And the following credit card numbers are invalid:

```markdown
a92332119c011112 (invalid characters)
4444444444444444 (only one type of number)
1111111111111110 (sum less than 16)
6666666666666661 (odd final number)
```

These are the requirements your project needs to fulfill:

- Make a JavaScript file with a name that describes its contents.
- Create a function with a descriptive name which makes it clear what the function does.
- The function should take one argument, the credit card number to validate.
- Write at least 2 comments that explain to others what a line of code is meant to do.
- Return a boolean from the function to indicate whether the credit card number is valid.
*/

function cardValidator(num) {
  // Store 16
  const numSize = 16;
  // Cast to String:
  const numStr = num.toString();
  // Cast to Array:
  const numArr = [...numStr];
  // Final throw new Error message.
  let errorMess = "";
  // Number must be 16 digits, all of them must be numbers.
  if (isNaN(num) || numStr.length !== numSize) {
    errorMess += `• Must be ${numSize} digits exactly.\n`;
  }
  // All of the digits cannot be the same.
  /* const isSameNum = numArr.every((num) => num === numStr.charAt(0));
  if (isSameNum) {
    errorMess += "• All same digits is not allowed.\n";
  } */
  // IA improvment proposal.
  if (new Set(numStr).size === 1) {
    errorMess += "• All same digits is not allowed.\n";
  }

  // The final digit must be even.
  if (numArr[numArr.length - 1] % 2 === 1) {
    errorMess += "• Last digit must be even.\n";
  }
  // The sum of all the digits must be greater than 16.
  let sum = numArr.reduce((acc, current) => acc + Number(current), 0);
  if (sum <= numSize) {
    errorMess += `• The digit's sum must be greater than ${numSize}.`;
  }

  // Invalid card numbers : Throw Error.
  if (errorMess) {
    throw new Error("Invalid card numbers:\n" + errorMess);
  }
  // Valid card.
  return true;
}

module.exports = cardValidator;
// Output.
const cardNumbers = [
  3003000330000000,
  "a92332119c011112",
  4444444444444444,
  1111111111111110,
  6666666666666661,
  1117,
  1234666766806664,
];
// Loop on cardNumbers array.
for (digits of cardNumbers) {
  console.log("\ndigits", digits);
  // Use try catch to handle   the thrown errors.
  try {
    if (cardValidator(digits)) {
      console.log(" 🎉 Your card is valid! 🎉 ");
    }
  } catch (e) {
    console.error(e.message);
  }
}
