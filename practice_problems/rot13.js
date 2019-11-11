function createAlphabet() {
  var alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  var alphabet = [];
  for (var i = 0; i < alphabetString.length; i++) {
    alphabet.push(alphabetString[i])
  }
  return alphabet;
}

function rot13(plainText) {
  var alphabet = createAlphabet();
  var cipherText = '';
  // iterate over each character in the plain text to be ciphered
  for (var i = 0; i < plainText.length; i++) {
    // check if the character is an English letter
    if (alphabet.includes(plainText[i].toLowerCase())) {
      // if the character is an English character, figure out its index in alphabet
      let letterIndex = alphabet.indexOf(plainText[i].toLowerCase());
      // loop back through the alphabet if adding 13 exceeds the letter z
      let transform = 13;
      if (letterIndex > 12) transform = -13;

      // rotation logic
      if (alphabet.includes(plainText[i])) {
        cipherText = cipherText + alphabet[letterIndex + transform];
      } else {
        cipherText = cipherText + alphabet[letterIndex + transform].toUpperCase();
      }

    // do not transform non English letters
    } else {
      cipherText = cipherText + plainText[i];
    }
  }

  return cipherText;
}
console.log(rot13('Teachers open the door, but you must enter by yourself.') == 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.');
console.log(rot13('Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.') == 'Teachers open the door, but you must enter by yourself.');
