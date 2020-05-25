// A triangle is classified as follows:
//
// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// To be a valid triangle, the sum of the angles must be exactly 180 degrees,
// and every angle must be greater than 0. If either of these conditions is not
// satisfied, the triangle is invalid.
//
// Write a function that takes the three angles of a triangle as arguments, and
// returns one of the following four strings representing the triangle's
// classification: 'right', 'acute', 'obtuse', or 'invalid'.
//
// You may assume that all angles have integer values, so you do not have to worry
// about floating point errors. You may also assume that the arguments are in
// degrees.

const RIGHT = 90;

function triangle(a, b, c) {
  if (!validTriangle([a, b, c])) { return 'invalid' };
  let sortedAngles = numSort([a, b, c]);
  for (var i = 0; i < sortedAngles.length; i++) {
    if (sortedAngles[i] === RIGHT) { return 'right' };
    if (sortedAngles[i] > RIGHT) { return 'obtuse' };
  }
  return 'acute';
}

function validTriangle(arr) {
  return arr.filter(num => num).length === 3
  ? arr.reduce((sum, value) => sum + value) === 180
  : false;
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

console.log(triangle(60, 70, 50) === 'acute');       // "acute"
console.log(triangle(30, 90, 60) === 'right');       // "right"
console.log(triangle(120, 50, 10) === 'obtuse');      // "obtuse"
console.log(triangle(0, 90, 90) === 'invalid');        // "invalid"
console.log(triangle(50, 50, 50) === 'invalid');       // "invalid"
