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

function checkGoldbach(n) {
  if (n < 4 || n % 2 != 0) {
    console.log(null);
  } else if (n == 4) {
    console.log(`${2} ${2}`);
  }
  for (var i = 0; i < n/2; i++) {
    for (var j = n/2; j < n; j++) {
      if (isPrime(i) && isPrime(j) && i + j == n) {
        console.log(`${i} ${j}`);
      }
    }
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
