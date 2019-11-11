function substring(string, start, end) {
  // handle end omission
  if (end == undefined) {
    end = string.length
  }
  // handle negative or nonnumeric start/end inputs
  if (typeof start != 'number' || (start < 0)) {
    start = 0;
  } else if (typeof end != 'number' || end < 0) {
    end = 0;
  }
  // handle start or end greater than string length
  if (start > string.length) {
    start = string.length
  } else if (end > string.length) {
    end = string.length
  }
  // handle start > end
  if (start > end) {
    let placeholder = start;
    start = end;
    end = placeholder;
  }
  // main implementation logic
  var subStr = '';

  for (var i = start; i < end; i++) {
    subStr = subStr + string[i];
  }
  return subStr;
}

var string = 'hello world';

console.log(substring(string, 2, 4)=="ll");    // "ll"
console.log(substring(string, 4, 2)=="ll");    // "ll"
console.log(substring(string, 0, -1)=="");   // ""
console.log(substring(string, 2)=="llo world");       // "llo world"
console.log(substring(string, 'a')=="hello world");     // "hello world"
console.log(substring(string, 8, 20) == "rld");   // "rld"
