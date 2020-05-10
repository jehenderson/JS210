function stringToInteger(strNum) {
  let num = 0;
  let negative = false;
  let digits = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
  }

  switch (strNum[0]) {
    case '+':
      strNum = strNum.slice(1, strNum.length);
      break;
    case '-':
      strNum = strNum.slice(1, strNum.length);
      negative = true;
      break;
  }

  for (let i = strNum.length - 1; i >= 0; i--) {
     num += digits[strNum[i]] * Math.pow(10, i)
  }

  return negative ? -num : num;
}

console.log(typeof(stringToInteger('525')));
console.log(stringToInteger('525'));
console.log(stringToInteger('-525'));
console.log('-3523');
console.log('23565');
