// Write a function that returns a new array composed of all values from the
// first array argument and the second array or value argument. Take note of the
// following specifications when writing your concat function.
//
// The first argument will always be an array.
// The second argument can be either an array or another value.
// The function should return a new array.
// The elements in the new array should be in the same order as they appear in
// the arguments.
// The function should copy any object references from the arguments into the
// new array — i.e., if you make a change to a reference object from one of the
// arguments after calling concat, those changes should show up in the output array
// as well.
// The function should copy the values of primitives (e.g., strings, numbers,
// and booleans).

function concat() {
  let newArr = [];

  for (var i = 0; i < arguments[0].length; i++) {
    newArr[i] = arguments[0][i];
  }

  for (var i = 1; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      for (var j = 0; j < arguments[i].length; j++) {
        newArr[newArr.length] = arguments[i][j];
      }
    } else {
      newArr[newArr.length] = arguments[i];
    }
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
