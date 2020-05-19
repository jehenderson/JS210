// Write a function that returns a list of all substrings of a string.
// Order the returned list by where in the string the substring begins.
// This means that all substrings that start at position 0 should come first,
// then all substrings that start at position 1, and so on. Since multiple
// substrings will occur at each position, return the substrings at a given
// position from shortest to longest.
//
// You may (and should) use the substringsAtStart function you wrote in the
// previous exercise:

function substrings(str) {
  return str.split('').map((char, index) => {
    return substringsAtStart(str.slice(index, str.length));
  }).join().split(',');
}

function substringsAtStart(str) {
  return str.split('').map((char, index, stringArray) => {
    return stringArray.slice(0, index + 1).join('');
  });
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
