function countChar(stringOfCharacters, findCharacter) {
  const regExp = new RegExp(findCharacter, "g");
  const match = stringOfCharacters.match(regExp);
  return match ? match.length : 0;
}

module.exports = countChar;

