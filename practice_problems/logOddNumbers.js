var logOddNumbers = function(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 2 != 0) {
            console.log(String(i));
        }
    }
}
logOddNumbers(19);
