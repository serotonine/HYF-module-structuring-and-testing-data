function pad(num) {
  const result = num.toString().padStart(2, "0"); 
  return result;
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;
  console.log("remainingSeconds",remainingSeconds);

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
console.log("formatTimeDisplay(61)", formatTimeDisplay(61));

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// 0

// c) What is the return value of pad is called for the first time?
// "00"

// d) What is the value assigned to num when pad is called for the last time in this program?
//  Explain your answer
// Remaining seconds => 1 (61 seconds)

// e) What is the return value assigned to num when pad is called for the last time in this program?
//  Explain your answer
// "01" => pad fill the string < 2 with 0.
