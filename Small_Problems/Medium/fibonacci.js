// Recursive
var memo = {};

function fibonacci(n) {
  if (n < 0) {
    throw 'Invalid Input Error';
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    if (memo[n]) {
      return memo[n];
    } else {
      memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
      return memo[n];
    }
  }
}

console.log(fibonacci(1) === 1);       // 1
console.log(fibonacci(2) === 1);       // 1
console.log(fibonacci(3) === 2);       // 2
console.log(fibonacci(4) === 3);       // 3
console.log(fibonacci(5) === 5);       // 5
console.log(fibonacci(12) === 144);      // 144
console.log(fibonacci(20) === 6765);      // 6765

// Procedural
// function fibonacci(n) {
//   if (n === 1 || n === 2) { return 1 }
//   let prev = 1;
//   let doubPrev = 1;
//   let fibNum = 0;
//   let index = 2;
//   do {
//     fibNum = prev + doubPrev;
//     doubPrev = prev;
//     prev = fibNum;
//     index++;
//   } while (index < n);
//
//   return fibNum;
// }
// console.log(fibonacci(20) === 6765);       // 6765
// console.log(fibonacci(50) === 12586269025);       // 12586269025
// console.log(fibonacci(75) === 2111485077978050);       // 2111485077978050
