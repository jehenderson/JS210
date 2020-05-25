// Write a function that takes an array as an argument and sorts that array using
// the bubble sort algorithm described above. The sorting should be done "in-place"
// — that is, the function should mutate the array. You may assume that the array
// contains at least two elements.

function bubbleSort(arr) {
  let unsorted = true;
  let index = 0;
  let count = 0;
  let temp;

  do {
    if (index < arr.length - 1) {
      if (arr[index] > arr[index + 1]) {
        temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        count = 0;
      } else {
        count++;
      }
      index++;
    } else {
      index = 0;
    }
    if (count === arr.length) { unsorted = !unsorted }
  } while (unsorted);
}

// Examples:

var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
