function crunch(str) {
  if (str == '') return '';
  var newStr = str[0];
  for (var i = 1; i < str.length; i++) {
    if (str[i] != str[i-1]) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(crunch('ddaaiillyy ddoouubbllee') == 'daily double');
console.log(crunch('4444abcabccba') == '4abcabcba');
console.log(crunch('ggggggggggggggg') == 'g');
console.log(crunch('a') == 'a');
console.log(crunch('') == '');
