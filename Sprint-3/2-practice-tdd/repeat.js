function repeat(str, repeat) {
  if (repeat < 0) {
    throw new Error("Negative counts are not valid.");
  }
  if (repeat === 1) {
    return str;
  }

  let output = "";
  for (let i = 0; i < repeat; i++) {
    output += str;
  }
  return output;
}

module.exports = repeat;
