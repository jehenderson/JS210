// Write a function that takes two array arguments, each containing a list of
// numbers, and returns a new array containing the products of all combinations
// of number pairs that exist between the two arrays. The returned array should
// be sorted in ascending numerical order.
//
// You may assume that neither argument will be an empty array.

function multiplyAllPairs(arr1, arr2) {
  let newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      newArr.push(arr1[i] * arr2[j]);
    }
  }

  return newArr.sort((score1, score2) => {
    if (score1 < score2) {
      return -1;
    } else if (score1 > score2) {
      return 1;
    } else {
      return 0;
    }
  });
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
