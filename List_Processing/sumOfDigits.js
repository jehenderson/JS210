// Write a function that takes one argument, a positive integer, and returns
// the sum of its digits. Do this using list processing techniques.
function sum(digits) {
  return String(digits).split('').reduce((sum, value) => {
    return Number(sum) + Number(value);
  });
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
