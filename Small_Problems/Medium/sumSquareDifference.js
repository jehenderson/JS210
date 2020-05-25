// Write a function that computes the difference between the square of the sum
// of the first n positive integers and the sum of the squares of the first n
// positive integers.

function sumSquareDifference(n) {
  sumSquared = sum(n) ** 2;
  sumOfSquares = sum(buildSquares(n));

  return sumSquared - sumOfSquares;
}

function buildSquares(n) {
  let numArr = [];
  for (var i = 1; i <= n; i++) {
    numArr.push(i ** 2);
  }

  return numArr;
}

function sum(n) {
  let numArr;
  if (!Array.isArray(n)) {
    numArr = [];
    for (var i = 1; i <= n; i++) {
      numArr.push(i);
    }
  } else {
    numArr = n;
  }

  return numArr.reduce((sum, value) => sum + value);
}

// Examples:

console.log(sumSquareDifference(3) === 22);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10) === 2640);     // 2640
console.log(sumSquareDifference(1) === 0);      // 0
console.log(sumSquareDifference(100) === 25164150);    // 25164150
