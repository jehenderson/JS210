function greetings(arr, obj) {
  var fullName = '';
  for (var i = 0; i < arr.length; i++) {
    fullName += arr[i];
    if (i != arr.length - 1) {
      fullName += ' ';
    }
  }
  console.log("Hello, " + fullName + `! Nice to have a ${obj.title} ${obj.occupation} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });
