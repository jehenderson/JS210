// Write a function that takes a string argument, and returns a new string that
// contains the value of the original string with all consecutive duplicate
// characters collapsed into a single character.

// Examples:

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

function crunch(str) {
  if (str) {
    return str.split('').reduce((accumulator, char, index, arr) => {
      if (index === 0) { return char }
      return char === arr[index - 1] ? accumulator : accumulator + char;
    });
  } else {
    return '';
  }
}
