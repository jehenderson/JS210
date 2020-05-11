function reverse(arg) {
  if (Array.isArray(arg)) {
    return reverseArray(arg);
  } else {
    return reverseString(arg);
  }

  function reverseArray(arr) {
    let reversed = [];
    for (var i = arr.length - 1; i >= 0 ; i--) {
      reversed[reversed.length] = arr[i];
    }

    return reversed;
  }

  function reverseString(str) {
    let reversed = '';
    for (var i = str.length - 1; i >= 0 ; i--) {
      reversed = reversed + str[i];
    }

    return reversed;
  }
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

var array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
