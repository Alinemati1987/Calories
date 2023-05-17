const { input } = require("./input.js");

// let elvs = [
//   [1000, 2000, 3000],
//   [4000],
//   [5000, 6000],
//   [7000, 8000, 9000],
//   [10000],
// ],

var allElves = input;

var max = 0;
var sums = [];
var firstThree = 0;

allElves.forEach((elf) => {
  var sum = 0;
  elf.forEach((food) => {
    sum += food;
  });

  sums.push(sum);

  if (sum > max) {
    max = sum;
  }
});

sums = sums.sort((a, b) => b - a);

for (let i = 0; i < 3; i++) {
  firstThree += sums[i];
}
console.log("Total Calories that Elf carries is: " + max);
console.log("Total Calories of the first three tops is: " + firstThree);
