// Write a function that displays an 8-pointed star in an nxn grid,
// where n is an odd integer that is supplied as an argument to the function.
// The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

// Examples:
//
star(7);
// // logs
// *  *  *    | r=0 0 spaces 1 star 2 spaces 1 star 2 spaces 1 star
//  * * *     | r=1 1 space 1 star 1 space 1 star 1 space 1 star
//   ***      | r=2 2 spaces 3 stars
// *******    | r=3 0 spaces 7 stars
//   ***      | r=4 2 spaces 3 stars
//  * * *     | r=5 1 space 1 star 1 space 1 star 1 space 1 star
// *  *  *    | r=6 0 spaces 1 star 2 spaces 1 star 2 spaces 1 star
star(9);
// // logs
// *   *   *  | r=0 0 spaces 1 star 3 spaces 1 star 3 spaces 1 star
//  *  *  *   | r=1 1 space 1 star 2 spaces 1 star 2 spaces 1 star
//   * * *    | r=2 2 spaces 1 star 1 space 1 star 1 space 1 star
//    ***     | r=3 3 spaces 3 stars
// *********  | r=4 0 spaces 9 stars
//    ***     | r=5 3 spaces 3 stars
//   * * *    | r=6 2 spaces 1 star 1 space 1 star 1 space 1 star
//  *  *  *   | r=7 1 space 1 star 2 spaces 1 star 2 spaces 1 star
// *   *   *  | r=8 0 spaces 1 star 3 spaces 1 star 3 spaces 1 star
star(15);

// Define the Problem
// Because it is an eight pointed star, all rows except for the middle row
// will have only 3 stars in them, separated by a variable number of interior spaces.
// The middle row will have n stars and zero spaces.
// The middle row can be identified by the row where r = (n - 1) / 2
// Spacing is separated by the stars, and can be thought of as
// initial and interior spacing, such that a row consists of
// initialSpaces + star + interiorSpaces + star + interiorSpaces + star
// except for the middle row, which is simply n stars
// Interior spaces start at maxSpaces, then decrement by 1 to 0,
// then increment back to maxSpaces
// Initial spaces always start as 0, then increment to maxSpaces, zero for
// middle row, maxSpaces decrement to 0
//
// Data Structures
// Will use strings as data structures of choice, to make use of String.prototype.repeat() method
//
// Algorithm
// n times log the output string, where output string is equal to
// initialSpaces + (star + interiorSpaces) * 2 + star
// initialSpaces initializes as ' '.repeat(0), but increments to maxSpaces,
// then resets to ' '.repeat(0), then goes back to maxSpaces and decrements to 0
// interiorSpaces initializes as maxSpaces, decrements to 0 (and is 0 for 3 rows),
// then increments back to maxSpaces

function star(n) {
  let maxSpaces = (n - 3) / 2;
  for (var i = 0; i < (n - 1) / 2; i++) {
    console.log(' '.repeat(i) + ('*' + ' '.repeat(maxSpaces - i)).repeat(2) + '*');
  }

  console.log('*'.repeat(n));

  for (var i = ((n - 1) / 2) - 1; i >= 0; i--) {
    console.log(' '.repeat(i) + ('*' + ' '.repeat(maxSpaces - i)).repeat(2) + '*');
  }
}
