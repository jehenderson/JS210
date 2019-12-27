function dateSuffix(date) {
  var suffix = 'th';
  var dateString = String(date);
  var digit;

  if (dateString.length === 1) {
    digit = dateString[0];
  } else if (dateString[0] !== '1') {
    digit = dateString[1];
  }

  if (digit === '1') {
    suffix = 'st';
  } else if (digit === '2') {
    suffix = 'nd';
  } else if (digit === '3') {
    suffix = 'rd';
  }

  return String(date) + suffix;
}

function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  var day = formattedDay(date);
  var month = formattedMonth(date);

  console.log("Today's date is " + day + ', ' + month + ' ' + dateSuffix(date.getDate()));
}

let today = new Date();
let day = today.getDay();


// console.log(today);
//
// console.log(`Today's day is ${day}.`);
// console.log(`Today's day is ${daysOfWeek[day]}.`);
//
// console.log(`Today's date is ${daysOfWeek[day]}, the ${day}th.`);
//
// console.log("Today's date is " + daysOfWeek[today.getDay()] + ', the ' + dateSuffix(today.getDate()));
// console.log("Today's date is " + daysOfWeek[today.getDay()] + ', ' +
//                                   months[today.getMonth()] + ' ' +
//                                   dateSuffix(today.getDate()));

formattedDate(today);
console.log(today.getFullYear());
console.log(today.getYear());
// console.log(today.getTime());

var tomorrow = new Date(today.getTime());

tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);

var nextWeek = new Date();
nextWeek.setDate(today.getDate() + 7);

console.log(today.toDateString() == nextWeek.toDateString());
