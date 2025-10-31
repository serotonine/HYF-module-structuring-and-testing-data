/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const isValidPassword = require("./password-validator");

test("Password is valid.", () => {
  const result = isValidPassword("Az3&plus.");
  expect(result).toEqual(true);
});

test("Password is invalid.", () => {
  const result = isValidPassword("hello!");
  expect(result).toEqual(false);
});

test("Password has been already used.", () => {
  expect(() =>
    isValidPassword("p4SSw.66*").toThrowError("Password already used.")
  );
});
