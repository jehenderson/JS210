// Write a function that takes a year as an argument, and returns the number
// of 'Friday the 13ths' in that year. You may assume that the year is greater
// than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom).
// You may also assume that the same calendar will remain in use for the
// foreseeable future.

function fridayThe13ths(year) {
  let count = 0;
  for (var i = 0; i < 12; i++) {
    let date = new Date(year, i, 13);
    date.getDay() === 5 ? count++ : '';
  }
  return count;
}

// Examples:

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
