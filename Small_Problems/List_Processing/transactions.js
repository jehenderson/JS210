// Write a function that takes two arguments, inventoryItem and transactions, and
// returns an array containing only the transactions for the specified inventoryItem.

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(transaction => {return transaction.id === inventoryItem});
}

var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

//console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

// Building on the previous exercise, write a function that returns true or false
// based on whether or not an inventory item is available. As before, the function
// takes two arguments: an inventory item and a list of transactions. The function
// should return true only if the sum of the quantity values of the item's
// transactions is greater than zero. Notice that there is a movement property
// in each transaction object. A movement value of 'out' will decrease the item's
// quantity.
//
// You may (and should) use the transactionsFor function from the previous exercise.

function isItemAvailable(inventoryItem, transactions) {
  return itemTotal(inventoryItem, transactions) > 0;
}

function itemTotal(inventoryItem, transactions) {
  return transactionsFor(inventoryItem, transactions)
          .reduce((total, transaction) => {
            if (transaction.movement === 'in') {
              total.quantity += transaction.quantity;
            } else if (transaction.movement === 'out') {
              total.quantity -= transaction.quantity;
            } else {
              throw 'Transaction type error'
            }

            return total;
          }).quantity;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
