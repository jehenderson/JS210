// Write a function that takes an array of strings, and returns an array of the
// same strings values without the vowels (a, e, i, o, u).

function removeVowels(strings) {
  return strings.map(string => {
    return string.split('')
                 .filter(char => /[^aeiou]/ig.test(char))
                 .join('');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
