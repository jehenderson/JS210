function repeat(string, times) {
  repeater = '';
  if (parseInt(times, 10) > 0) {
    for (var i = 0; i < times; i++) {
      repeater = repeater + string;
    }
  } else if (parseInt(times, 10) == 0) {
    return '';
  } else {
    return undefined;
  }
  return repeater;
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined
