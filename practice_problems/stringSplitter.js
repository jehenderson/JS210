function splitString(string, delimiter) {
  var delimiters = [];
  var subString = '';

  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  for (var i = 0; i < string.length; i++) {
    subString = subString + string[i];
    if (string[i] == delimiter || i == string.length - 1) {
      delimiters.push(subString);
      subString = '';
    }
  }

  console.log(delimiters);
}

splitString('abc,123,hello world', ',');
// // logs:
// // abc
// // 123
// // hello world
//
splitString('hello');
// // logs:
// // ERROR: No delimiter
//
splitString('hello', '');
// // logs:
// // h
// // e
// // l
// // l
// // o
//
splitString('hello', ';');
// // logs:
// // hello
//
splitString(';hello;', ';');
// // logs:
// //  (this is a blank line)
// // hello
