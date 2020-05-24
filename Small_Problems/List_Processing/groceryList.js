// Write a function that takes a grocery list (a two-dimensional array) with
// each element containing a fruit and a quantity, and returns a one-dimensional
// array of fruits, in which each fruit appears a number of times equal to its
// quantity.

function buyFruit(list) {
  let fruits = [];
  list.forEach(item => {
    for (var i = 0; i < item[1]; i++) {
      fruits.push(item[0]);
    }
  });
  return fruits;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
