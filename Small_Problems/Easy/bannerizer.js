logInBox('To boldly go where no one has gone before.');
logInBox(prompt('Enter a phrase.'));

function logInBox(str) {
  console.log('+' + '-'.repeat(str.length + 2) + '+');
  console.log('|' + ' '.repeat(str.length + 2) + '|');
  console.log('| ' + str + ' |');
  console.log('|' + ' '.repeat(str.length + 2) + '|');
  console.log('+' + '-'.repeat(str.length + 2) + '+');
}
