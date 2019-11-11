function multiplesOfThreeAndFive(start, end) {
  var i = parseInt(start, 10);
  var j = parseInt(end, 10);
  for (i; i <= j; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(String(i)+"!");
    } else if (i % 3 == 0 || i % 5 == 0) {
      console.log(String(i));
    }
  }
}

let start = prompt("Range start:");
let end = prompt("Range end:");
multiplesOfThreeAndFive(start, end);
