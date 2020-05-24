// Write a function that takes a string argument, and returns a list of all
// substrings that start from the beginning of the string, ordered from shortest
// to longest.

function substringsAtStart(str) {
  return str.split('').map((char, index, stringArray) => {
    return stringArray.slice(0, index + 1).join('');
  });
}


console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
