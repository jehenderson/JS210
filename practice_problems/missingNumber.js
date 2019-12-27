function missing(arr) {
  newArr = [];
  for (var i = arr[0]; i < arr[arr.length-1]; i++) {
    if (arr.includes(i) == false) {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(missing([-3, -2, 1, 5]));
console.log(missing([1, 2, 3, 4]));
console.log(missing([1, 5]));
console.log(missing([6]));

console.log([1] + [2]);
