// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");
// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

test("should count multiple occurrences of a character", () => {

  const count1 = countChar("aaaaa", "a");
  const count2 = countChar("Once Upon A Time A litle Rabbit Called Anastasia","a");
  const count3 = countChar("ON Litle Italy on my heart on very hours","on");

  expect(count1).toEqual(5);
  expect(count2).toEqual(5);
  expect(count3).toEqual(2);
});

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.
