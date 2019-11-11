var bill;
var tip;
var tipPercent
bill = parseInt(prompt("What is the bill?"));
tipPercent = parseInt(prompt("What is the tip percentage?"))/100;
tip = bill * tipPercent;

alert(`The tip is $${tip}\nThe total is $${bill + tip}`);
