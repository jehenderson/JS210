var numGrades;
numGrades = parseInt(prompt("How many grades would you like to enter?"), 10);
var grades = new Array(numGrades);
var sum = 0;
for (var i = 0; i < grades.length; i++) {
  grades[i] = parseInt(prompt(`Enter score ${i+1}`), 10);
  sum += grades[i];
}

var grade = sum / grades.length;
if (grade >= 90) grade = 'A';
if (grade >= 70 && grade <90) grade = 'B';
if (grade >= 50 && grade < 70) grade = 'C';
if (grade < 50) grade = 'F';

console.log(`Based on the average of your ${grades.length} scores your letter grade is ${grade}.`);
