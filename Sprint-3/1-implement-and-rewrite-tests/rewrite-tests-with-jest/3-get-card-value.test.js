// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("Should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("Should return the number range (2-10).", () => {
  expect(() => getCardValue("5♣︎").toEqual(5));
  expect(() => getCardValue("6♣︎").toEqual(6));
  expect(() => getCardValue("4♣︎").toEqual(4));
  expect(() => getCardValue("3♣︎").toEqual(3));
  expect(() => getCardValue("10♠").toEqual(10));
});
// Case 3: Handle Face Cards (J, Q, K):
test("Should return 1° for Face Cards (J, Q, K).", () => {
  expect(() => getCardValue("J♣︎").toEqual(10));
  expect(() => getCardValue("Q♠").toEqual(10));
  expect(() => getCardValue("K♣︎").toEqual(10));
  expect(() => getCardValue("K♥").toEqual(10));
});
// Case 4: Handle Ace (A):
test("Should return 1° for Ace (A).", () => {
  expect(() => getCardValue("A♣︎").toEqual(11));
  expect(() => getCardValue("A♠").toEqual(11));
  expect(() => getCardValue("A♦︎").toEqual(11));
  expect(() => getCardValue("A♥").toEqual(11));
});
// Case 5: Handle Invalid Cards:
test("Should throw an error for invalid cards", () => {
  expect(() => getCardValue("1♠")).toThrowError("Invalid card rank.");
  expect(() => getCardValue("X♥")).toThrowError("Invalid card rank.");
  expect(() => getCardValue("A")).toThrowError("Invalid card rank.");
  expect(() => getCardValue("A♠♠")).toThrowError("Invalid card rank.");
  expect(() => getCardValue(123)).toThrowError("Invalid card rank.");
});
