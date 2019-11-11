function substr(string, start, length) {
  var subStr = '';
  if (start < 0) start += string.length;

  for (var i = start; i < (length+start) && i < string.length; i++) {
    subStr = subStr + string[i];
  }
  return subStr;
}

var string = 'hello world';

console.log(substr(string, 2, 4) == 'llo ');  // "llo "
console.log(substr(string, -3, 2) == 'rl');     // "rl"
console.log(substr(string, 8, 20) == 'rld');     // "rld"
console.log(substr(string, 0, -20) == '');    // ""
console.log(substr(string, 0, 0) == '');      // ""
