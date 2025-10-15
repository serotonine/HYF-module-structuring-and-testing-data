const minimum = 1;
const maximum = 100;

/*
 * Well-known JavaScript pattern for generating random integers
 * in a specific range [minimum, maximum] (both inclusive).
 * minimum <= num <= maximum.
 */
/* Shift along the range from min to max. */
const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
/* Check */
let counter = 0;
const min = 5;
const max = 20;

while (counter <= 5) {
  console.log("\nMinimum", min, "Maximum", max);
  // Mystery of Mathematics.
  const m = max - min + 1;
  console.log("(max - min + 1) => ", m);
  /*  return random float in between 0 and 1 (non inclusive) */
  const rd = Math.random();
  console.log("random", rd);
  // Mystery of Mathematics.
  console.log(`(${m} * random) => `, m * rd);
  /* Math.floor return the nearest lower integer
   * E.g.  Math.floor(3.9) === 3;
   * Return a range 0 => 99.
   */
  const int = Math.floor(rd * m);
  console.log(`Math.floor(${m} * random) =>`, int);
  console.log(`${int} + ${min} =>`, Math.floor(rd * m) + min);
  counter++;
}

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
