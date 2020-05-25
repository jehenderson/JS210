// Write a function that rotates the last n digits of a number.
// For the rotation, rotate by one digit to the left, moving the first
// digit to the end.
//
// Examples:

console.log(rotateRightmostDigits(735291, 1) === 735291);      // 735291
console.log(rotateRightmostDigits(735291, 2) === 735219);      // 735219
console.log(rotateRightmostDigits(735291, 3) === 735912);      // 735912
console.log(rotateRightmostDigits(735291, 4) === 732915);      // 732915
console.log(rotateRightmostDigits(735291, 5) === 752913);      // 752913
console.log(rotateRightmostDigits(735291, 6) === 352917);      // 352917

function rotateRightmostDigits(num, key) {
  let splitNum = String(num).split('');
  let rotator = splitNum.splice(splitNum.length - key, 1);
  return Number(splitNum.join('') + rotator);
}
