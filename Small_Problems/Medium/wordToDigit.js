// Write a function that takes a sentence string as an argument,
// and returns that string with every occurrence of a "number word" —
// 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
// — converted to its corresponding digit character.
//
// Example:

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

function wordToDigit(str) {
  const NUMBERS = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  }
  
  return str.split(/\b/g).map(word => {
    return Object.keys(NUMBERS).includes(word) ? NUMBERS[word] : word;
  }).join('');
}
