// A featured number (something unique to this exercise) is an odd number that
// is a multiple of 7, with all of its digits occuring exactly once each.
// For example, 49 is a featured number, but 98 is not (it is not odd), 97 is
// not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).
//
// Write a function that takes an integer as an argument, and returns the next
// featured number greater than the integer. Issue an error message if there is
// no next featured number.
//
// NOTE: The largest possible featured number is 9876543201.
// A featured num is equal to 7 * (2n - 1) where n >= 1
// Given a start number y, find the featured num above it
// ((y / 7) + 1) / 2 = n

function featured(num) {
  if (num > 9876543201) { throw 'No Next Error' };
  let y = Math.floor(((num / 7) + 1) / 2);
  let candidate = getCandidate(y);
  while (!digitCheck(candidate)) {
    y++;
    candidate = getCandidate(y);
  }
  return candidate;
}

function getCandidate(y) {
  return 7 * (2 * (y + 1) - 1);
}

function digitCheck(num) {
  let seen = {};
  let digits = String(num).split('');
  for (var i = 0; i < digits.length; i++) {
    if (seen[digits[i]]) {
      return false;
    } else {
      seen[digits[i]] = true;
    }
  }
  return true;
}

// Examples:

console.log(featured(12) === 21);           // 21
console.log(featured(20) === 21);           // 21
console.log(featured(21) === 35);           // 35
console.log(featured(997) === 1029);          // 1029
console.log(featured(1029) === 1043);         // 1043
console.log(featured(999999) === 1023547);       // 1023547
console.log(featured(999999987) === 1023456987);    // 1023456987
