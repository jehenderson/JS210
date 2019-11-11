var userEntry;
var password = 'password';
var grantAccess = false;

for (var i = 0; i < 3; i++) {
  userEntry = prompt("What is the password:");
  if (userEntry == password) {
    grantAccess = true;
    break;
  }
}

if (grantAccess) {
  console.log("You have successfully logged in.")
} else {
  console.log("You have been denied access.");
}
