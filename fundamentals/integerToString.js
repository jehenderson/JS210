function numDigits(integer) {
  var num = 0;
  var copiedInt = integer;

  var i = 1;
  while(copiedInt > 0) {
    copiedInt = Math.floor(copiedInt /= 10);
    num++;
  }

  return num;
}

function integerToString(integer) {
  var digits = {
    0: '0', 1: '1', 2: '2', 3: '3', 4: '4',
    5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
  }
  var digitString = '';

  if (integer == 0) {
    return '0';
  } else {
    for (var i = numDigits(integer); i > 0; i--) {
      digit = Math.floor((integer % Math.pow(10, i)) / Math.pow(10, i-1));
      digitString += digits[digit];
    }

    return digitString;
  }
}

console.log(integerToString(4321) == '4321');
console.log(integerToString(0) == '0');
console.log(integerToString(5000) == '5000');
console.log(integerToString(123) == '123');
