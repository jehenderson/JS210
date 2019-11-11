function toLowerCase(string) {
  converted = '';
  for (var i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) {
      converted = converted + String.fromCharCode(string.charCodeAt(i)+32);
    } else {
      converted = converted + string[i];
    }
  }
  return converted;
}

console.log(toLowerCase('ALPHABET') == 'alphabet');    // "alphabet"
console.log(toLowerCase('123') == '123');         // "123"
console.log(toLowerCase('abcDEF') == 'abcdef');      // "abcdef"
