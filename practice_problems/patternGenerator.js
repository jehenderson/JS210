function generatePattern(n) {
  pattern = new Array(n);
  nums = '';
  for (var i = 1; i <= n; i++) {
    nums += String(i);
    console.log(nums + '*'.repeat(n-i));
  }
}

generatePattern(7);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567
