function pop(arr) {
  if (arr.length === 0) {
    return undefined
  } else {
    let value = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return value;
  }
}

var array = [1, 2, 3];
console.log(pop(array));                        // 3
console.log(array);                             // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]
