function shortLongShort(str1, str2) {
  var substr = '';
  if (str1.length < str2.length) {
    substr = str1 + str2 + str1;
  } else {
    substr = str2 + str1 + str2;
  }
  return substr;
}

console.log(shortLongShort('abc', 'defgh') == 'abcdefghabc');
console.log(shortLongShort('abcde', 'fgh') == 'fghabcdefgh');
console.log(shortLongShort('', 'xyz') == 'xyz');
