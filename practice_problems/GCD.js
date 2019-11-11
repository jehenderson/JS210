function gcd(x, y) {
  a = parseInt(x, 10);
  b = parseInt(y, 10);
  for (var i = b; i > 0; i--) {
    if (a % i == 0 && b % i == 0) {
      return i;
    }
  }
  return null;
}

console.log(gcd(12, 4) == 4);
console.log(gcd(15, 10) == 5);
console.log(gcd(9, 2) == 1);
