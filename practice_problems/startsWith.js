function startsWith(string, searchString) {
  var allMatch = true;
  for (var i = 0; i < searchString.length; i++) {
    if (searchString[i] != string[i]) allMatch = false;
  }

  return allMatch;
}

var str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We') == true);              // true
console.log(startsWith(str, 'We put') == true);          // true
console.log(startsWith(str, '') == true);                // true
console.log(startsWith(str, 'put') == false);             // false

var longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString) == false);      // false
