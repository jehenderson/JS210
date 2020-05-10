function intToString(int) {
  let stringNum = '';
  let arr = [];
  let i = 0;
  let digits = {
    0: '0', 1: '1', 2: '2', 3: '3', 4: '4',
    5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
  }

  do {
    let digit = int * Math.pow(10, i);
    arr.push(digit);
    int -= digit;
  } while (int > 0);
  stringNum = arr.reverse().join();

  console.log(`number: ${stringNum} | type: ${typeof(stringNum)}`);
  return stringNum;
}

intToString(4321);
intToString(0);
intToString(5000);
intToString(-123);
