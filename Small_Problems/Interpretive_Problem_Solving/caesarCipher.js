// Write a function that implements the Caesar Cipher. The Caesar Cipher is
// one of the earliest and simplest ways to encrypt plaintext so that a message
// can be transmitted securely. It is a substitution cipher in which each letter
// in a plaintext is substituted by the letter located a given number of
// positions away in the alphabet. For example, if the letter 'A' is right-shifted
// by 3 positions, it will be substituted with the letter 'D'. This shift value
// is often referred to as the key. The "encrypted plaintext" (ciphertext) can be
// decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper case).
// Any other character is left as is. The substituted letters are in the same
// letter case as the original letter. If the key value for shifting exceeds the
// length of the alphabet, it wraps around from the beginning.

// Define the Problem
// 26 letters in the English alphabet
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// In a wrap around scenario, take the modulus of the (letterPos + key) % 26
// For each letter (upper & lowercase), cipher by the given key, if a char is not a
// letter, do not change it. Return the transformed string.
// Test Cases

// simple shift
console.log(caesarEncrypt('A', 0) === "A");
console.log(caesarEncrypt('A', 3) === "D");

// wrap around
console.log(caesarEncrypt('y', 5) === "d");
console.log(caesarEncrypt('a', 47) === "v");

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) ===
"ZABCDEFGHIJKLMNOPQRSTUVWXY");

console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) ===
"Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");


// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) ===
"Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");

// Data Structures
// Input is given as a string and a number key.
// Split the string into an array in order to make use of list processing techniques
// (i.e. transform), join the processed array and return a string

// Algorithm
// Split the string into chars, if the char matches [a-z]/i transform it, otherwise
// leave as is. Join the transformed char list and return.
// To minimize the amount of processing in the program, instead of processing each
// letter, process the alphabet itself first, then use the cipherbet data Structure
// to populate the cipheredtext

function caesarEncrypt(plainText, cipherKey) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let cipherBet = ALPHABET.map((char, index) => {
    let cipherPos = index + cipherKey;
    return cipherPos < 26 ? ALPHABET[cipherPos] : ALPHABET[cipherPos % 26];
  });

  let plainChars = plainText.split('');
  let cipherText = plainChars.map((char, index) => {
    if (/[a-z]/i.test(char)) {
      let cipherChar = cipherBet[ALPHABET.indexOf(char.toLowerCase())];
      return char.toLowerCase() === char ? cipherChar : cipherChar.toUpperCase();
    } else {
      return char;
    }
  }).join('');

  return cipherText;
}
