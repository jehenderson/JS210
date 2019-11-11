function trim(str) {
  copy = false;
  endIndex = str.length;
  newStr = '';

  for (var i = str.length - 1; i >= 0; i--) {
    if (str[i] != ' ') {
      endIndex = i;
      break;
    }
  }

  for (var i = 0; i <= endIndex; i++) {
    if (str[i] != ' ') copy = true;
    if (copy) {
      newStr = newStr + str[i];
    }
  }

  if (typeof newStr === 'undefined') {
    newStr = '';
  }

  console.log(newStr);
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""
