function degreeConversion(radians) {
  return radians * 180 / Math.PI;
}

function randomGenerator(min, max) {
  let minimum = 0, maximum = 1;
  if (min < max) {
    minimum = min;
    maximum = max;
  } else {
    minimum = max;
    maximum = min;
  }
  return  Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
}

console.log(degreeConversion(1));
console.log(Math.abs(-180));
console.log(Math.sqrt(16777216));
console.log(Math.pow(16, 6));

var a = 50.72;
var b = 49.2;
var c = 49.86;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));

console.log(randomGenerator(5, 10));
