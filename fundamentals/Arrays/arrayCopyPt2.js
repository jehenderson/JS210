var myArray = [1, 2, 3, 4];
var myOtherArray1 = copyValues1(myArray);
var myOtherArray2 = copyValues2(myArray);

myArray.pop();
console.log(`myOtherArray1: ${myOtherArray1} | myOtherArray2: ${myOtherArray2}`);

myArray = [1, 2];
console.log(`myOtherArray1: ${myOtherArray1} | myOtherArray2: ${myOtherArray2}`);

function copyValues1(arr) {
  return arr.slice();
}

function copyValues2(arr) {
  return [...arr];
}
