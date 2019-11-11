var length;
var width;
var area;
const m2ft = 10.7639;

length = parseInt(prompt("Enter the length of the room in meters:"));
width = parseInt(prompt("Enter the width of the room in meters:"));

area = length * width;

alert(`The area of the room is ${area} square meters (${area * m2ft} square feet.)`);
