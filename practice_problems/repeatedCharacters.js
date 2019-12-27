function repeatedCharacters(str) {
  countingObject = new Object();
  string = str.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (countingObject[string[i]] !== undefined) {
      countingObject[string[i]] += 1;
    } else {
      countingObject[string[i]] = 1;
    }
  }

  for (key in countingObject) {
    if (countingObject[key] === 1) {
      delete countingObject[key];
    }
  }

  return countingObject;
}

console.log(repeatedCharacters('Programming'));
console.log(repeatedCharacters('Combination'));
console.log(repeatedCharacters('Pet'));
console.log(repeatedCharacters('Paper'));
console.log(repeatedCharacters('Baseless'));
