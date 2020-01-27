function stringToNum(digitString) {
  digits = {
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5,
    '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
  }
  signs = { '+': 1, '-': -1 }
  var newNum = 0;
  var signed = 0;

  if (digitString[0] in signs) {
    signed = 1;
  }

  for (var i = signed; i < digitString.length; i++) {
    newNum += digits[digitString[i]]*Math.pow(10, digitString.length-(i+1));
  }

  if (signed > 0) {
    return newNum * signs[digitString[0]]
  } else {
    return newNum;
  }
}

console.log(stringToNum('4321') == 4321);
console.log(stringToNum('-570') == -570);
console.log(stringToNum('+100') == 100);
