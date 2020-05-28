// Write a function that takes an array of arrays representing a mxn matrix,
// and returns the transpose of the matrix. You should implement the function
// on your own, without using any external libraries.

// Take care not to modify the original matrix — your function must produce a
// new matrix and leave the input matrix array unchanged.

// m = arr.length
// n = arr[0].length

// Original
//   [0][0]   |   [0][1]   |   [0][...]   |   [0][n - 1]
//   [1][0]   |   [1][1]   |   [1][...]   |   [1][n - 1]
//  [...][0]  |  [...][1]  |  [...][...]  |  [...][n - 1]
// [m - 1][0] | [m - 1][1] | [m - 1][...] | [m - 1][n - 1]
//
// Transposed
//   [0][0]   |   [1][0]   |   [...][0]   |   [m - 1][0]
//   [0][1]   |   [1][1]   |   [...][1]   |   [m - 1][1]
//  [0][...]  |  [1][...]  |  [...][...]  |  [m - 1][...]
// [0][n - 1] | [1][n - 1] | [...][n - 1] | [m - 1][n - 1]
//
// 1 | 2 | 3     1 | 4 | 7
// 4 | 5 | 6     2 | 5 | 8
// 7 | 8 | 9     3 | 6 | 9
// Examples:

// This works well for square matrices, fails when numRows !== numColumns
// function transpose(arr) {
//   return arr.map((row, rowIndex) => row.map((cell, columnIndex) => {
//     return arr[columnIndex][rowIndex];
//   }))
// }

function transpose(arr) {
  let m = arr.length;
  let n = arr[0].length;
  let newArr = [];

  for (var i = 0; i < m; i++) {
    for (var j = 0; i < n; i++) {
      
    }
  }

  return newArr;
}

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

// var newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
