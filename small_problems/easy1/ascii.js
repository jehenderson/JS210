function asciiValue(str) {
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum;
}

console.log(asciiValue('Four score') == 984);
console.log(asciiValue('Launch School') == 1251);
console.log(asciiValue('a') == 97);
console.log(asciiValue('') == 0);
