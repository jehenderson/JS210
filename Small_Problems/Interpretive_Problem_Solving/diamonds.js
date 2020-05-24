// Write a function that displays a four-pointed diamond in an nxn grid,
// where n is an odd integer supplied as an argument to the function.
// You may assume that the argument will always be an odd integer.

// Define the Problem
// n = 2m + 1 are the range of normal cases
// m = (n - 1) / 2
// max spaces = m, numSpaces goes from max spaces to 0, back to max
// number of stars per line is equal to n - (numSpaces * 2)
// (2*0) + 1 = 1
// (2*1) + 1 = 3
// (2*2) + 1 = 5
// (2*3) + 1 = 7
// (2*4) + 1 = 9


// Examples:

diamond(1);
// logs     m = 0
// *        //0 spaces | n stars
diamond(3);
// logs     m = 1
//  *       //1 space  | n stars - 2
// ***      //0 spaces | n stars
//  *       //1 space  | n stars - 2
diamond(7);
// logs     m = 3
//    *     //3 spaces | n stars - 6
//   ***    //2 spaces | n stars - 4
//  *****   //1 space  | n stars - 2
// *******  //0 spaces | n stars
//  *****   //1 space  | n stars - 2
//   ***    //2 spaces | n stars - 4
//    *     //3 spaces | n stars - 6
diamond(9);
// logs      m = 4
//     *     //4 spaces | n stars - 8
//    ***    //3 spaces | n stars - 6
//   *****   //2 spaces | n stars - 4
//  *******  //1 space  | n stars - 2
// ********* //0 spaces | n stars
//  *******  //1 space  | n stars - 2
//   *****   //2 spaces | n stars - 4
//    ***    //3 spaces | n stars - 6
//     *     //4 spaces | n stars - 8

diamond(21);

// Data Structure
// Will use string to make use of string.prototype.repeat(n) method for spacing

// Algorithm
// Set numSpaces = maxSpaces
// 0..n-1 iterate through each row
// Set stars = n - 2*numSpaces
// Log numSpaces+stars
// decrement numSpaces, if numSpaces === 0 increment

function diamond(n) {
  if (n % 2 === 0) { throw 'Invalid Input Error' };

  let numSpaces = (n - 1) / 2;
  let spaces = '';
  let stars = '';
  let increment = -1;
  for (var i = 0; i < n; i++) {
    spaces = ' '.repeat(numSpaces);
    stars = '*'.repeat(n - 2 * numSpaces);

    console.log(spaces+stars);
    if (numSpaces === 0) { increment *= -1 };
    numSpaces += increment;
  }
}
