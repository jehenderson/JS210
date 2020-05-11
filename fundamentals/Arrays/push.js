function push() {
  for (var i = 1; i < arguments.length; i++) {
    arguments[0][arguments[0].length] = arguments[i];
  }

  return arguments[0].length;
}

var array = [1, 2, 3];
console.log(push(array, 4, 5, 6));              // 6
console.log(array);                             // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0
