function shift(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    let element = arr[0];
    arr.splice(0, 1);
    return element;
  }
}

function unshift() {
  let copy = [];
  for (let i = 0; i < arguments[0].length; i++) {
    copy[i] = arguments[0][i];
  }

  for (let i = 1; i < arguments.length; i++) {
    arguments[0][i - 1] = arguments[i];
  }

  for (let i = arguments.length - 1; i < (copy.length + arguments.length - 1); i++) {
    arguments[0][i] = copy[i - arguments.length + 1];
  }

  return arguments[0].length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

var testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(`testArray: ${testArray}`);       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(`testArray: ${testArray}`);       // [5, 2, 3]
