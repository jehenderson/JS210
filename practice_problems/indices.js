// function indexOf(firstString, secondString) {
//   var match = -1;
//   var matched = false;
//   for (var i = 0; i < firstString.length; i++) {
//     if (firstString[i] == secondString[0]) {
//       for (var j = 0; j < secondString.length; j++) {
//         if (secondString[j] == firstString[i + j]) {
//           matched = true;
//         } else {
//           matched = false;
//         }
//       }
//       if (matched) {
//         return i
//       }
//     }
//   }
//   return match;
// }
//
// function lastIndexOf(firstString, secondString) {
//
// }
//
// indexOf('Some strings', 's');                      // 5
// indexOf('Blue Whale', 'Whale');                    // 5
// // indexOf('Blue Whale', 'Blute');                    // -1
// // indexOf('Blue Whale', 'leB');                      // -1
// //
// // lastIndexOf('Some strings', 's');                  // 11
// // lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
// // lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1
