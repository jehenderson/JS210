function oddElementsOf(arr) {
  newArr = [];
  for (var i = 1; i < arr.length; i+=2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function combinedArray(even, odd) {
  newArr = [];
  for (var i = 0; i < even.length; i++) {
    if (i % 2 == 0) {
      newArr.push(even[i]);
    }
    else {
      newArr.push(odd[i]);
    }
  }
  return newArr;
}

function originReverser(arr) {
  newArr = [];
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < arr.length; j++) {
      newArr.push(arr[j]);
    }
    arr.reverse()
  }
  return newArr;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

console.log(oddElementsOf(digits));
console.log(combinedArray(digits, letters));
console.log(originReverser(digits));
