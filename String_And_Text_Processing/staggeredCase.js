// Write a function that takes a string as an argument,
// and returns that string with a staggered capitalization scheme.
// Every other character, starting from the first, should be capitalized
// and should be followed by a lowercase or non-alphabetic character.
// Non-alphabetic characters should not be changed, but should be counted
// as characters for determining when to switch between upper and lower case.

function staggeredCase1(str) {
  return str.split('')
            .map((char, index) => {
              if (index === 0) {
                return char.toUpperCase();
              } else if (index % 2 === 0) {
                return /[a-z]/.test(char) ? char.toUpperCase() : char;
              } else {
                return /[A-Z]/.test(char) ? char.toLowerCase() : char;
              }
            })
            .join('');
}

// Modify the function from the previous exercise so that it ignores
// non-alphabetic characters when determining whether a letter should be upper
// or lower case. Non-alphabetic characters should still be included in the
// output string, but should not be counted when determining the appropriate case.

function staggeredCase2(str) {
  let next = false;
  return str.split('')
            .map(char => {
              if (/[a-zA-Z]/.test(char)) {
                next = !next;
                if (next) {
                  return char.toUpperCase();
                } else {
                  return char.toLowerCase();
                }
              } else {
                return char;
              }
            })
            .join('');
}

console.log(staggeredCase1('I Love Launch School!') === "I LoVe lAuNcH ScHoOl!");
console.log(staggeredCase1('ALL_CAPS') === "AlL_CaPs");
console.log(staggeredCase1('ignore 77 the 444 numbers') === "IgNoRe 77 ThE 444 NuMbErS");

console.log(staggeredCase2('I Love Launch School!') === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase2('ALL CAPS') === "AlL cApS");
console.log(staggeredCase2('ignore 77 the 444 numbers') === "IgNoRe 77 ThE 444 nUmBeRs");
