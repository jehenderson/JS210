// A triangle is classified as follows:
//
// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides
// must be greater than the length of the longest side, and every side must
// have a length greater than 0. If either of these conditions is not satisfied,
// the triangle is invalid.
//
// Write a function that takes the lengths of the three sides of a triangle as
// arguments, and returns one of the following four strings representing the
// triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

function triangle(x, y, z) {
  let sortedSides = numSort([x, y, z]);

  if (!validTriangle(sortedSides)) { return 'invalid' }

  if (x === y && y === z) {
    return 'equilateral';
  } else if (x === y || x === z || y === z) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

function validTriangle(arr) {
  return arr[0] + arr[1] > arr[2];
}

function numSort(arr) {
  return arr.sort(function(a, b) {
    if (a < b) {
      return -1;
    } else if (b < a) {
      return 1;
    } else {
      return 0;
    }
  });
}

// Examples:

console.log(triangle(3, 3, 3) === 'equilateral');        // "equilateral"
console.log(triangle(3, 3, 1.5) === 'isosceles');      // "isosceles"
console.log(triangle(3, 4, 5) === 'scalene');        // "scalene"
console.log(triangle(0, 3, 3) === 'invalid');        // "invalid"
console.log(triangle(3, 1, 1) === 'invalid');        // "invalid"
