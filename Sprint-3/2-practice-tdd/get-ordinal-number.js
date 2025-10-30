function getOrdinalNumber(num) {
  const suffix = ["th", "st", "nd", "rd"];
  /* 
   * For numbers greater than or equal to 100, n % 100 extracts the last two digits,
   * allowing cases like 111, 112, and 113 to be handled in the same way as 11, 12, and 13. 
  */
  const n = num % 100;
  /*
   * (n - 20) % 10 => negatif || 0
  */ 
  return num + (suffix[(n - 20) % 10] || suffix[n] || suffix[0]);
}

module.exports = getOrdinalNumber;
