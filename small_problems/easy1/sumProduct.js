var num;
var choice;
num = parseInt(prompt('Please enter an integer greater than 0:'));
choice = prompt('Enter "s" to compute the sum, or "p" to compute the product.');
switch (choice) {
  case 's':
    let sum = 0;
    for (var i = 1; i <= num; i++) sum += i;
    alert(`The sum of the integers between 1 and ${num} is ${sum}.`);
    break;
  case 'p':
    let product = 1;
    for (var i = 1; i <= num; i++) product *= i;
    alert(`The product of the integers between 1 and ${num} is ${product}.`);
    break;
  default:
    alert("Invalid input.");
}
