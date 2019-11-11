function isPrime(num) {
  var prime = true;
  if (num == 1 || num == 0) {
    return false;
  }
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
    }
  }
  return prime;
}

console.log(isPrime(1) === false);
console.log(isPrime(2) === true);
console.log(isPrime(3) === true);
console.log(isPrime(43) === true);
console.log(isPrime(55) === false);
console.log(isPrime(0) === false);
