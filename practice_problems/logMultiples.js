function logMultiples(number) {
  for (var i = 100; i >=0; i--) {
    if (i % number == 0 && i % 2 != 0) {
      console.log(String(i));
    }
  }
}

logMultiples(17);
logMultiples(21);
