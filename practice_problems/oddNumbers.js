var logOddNumbers = function(num) {
    for (var i = 0; i < num; i++) {
        if (num % 2 == 0) {
            console.log(String(num));
        }
    }
}

logOddNumbers(19);