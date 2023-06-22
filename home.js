// const { input } = require("./input.js");
const fs = require("fs");

// Main //
function main() {
  const data = getData();
  const sumPortions = iterateData(data);
  const partOne = getResult(1, sumPortions); // Arguments => first: number of items , second: Sum of each snack
  const partTwo = getResult(3, sumPortions); // Arguments => first: number of items , second: Sum of each snack
  consoleResults([partOne, partTwo]);
}

// Functions //

function consoleResults(answers) {
  answers.forEach((answer, i) => {
    i++;
    console.log("Answer of part " + i + " is: " + answer);
  });
}

function getResult(num, sums) {
  let output = 0;
  for (let i = 0; i < num; i++) {
    output += sums[i];
  }
  return output;
}

function iterateData(data) {
  let max = 0;
  let sums = [];

  data.forEach((elf) => {
    let sum = 0;
    elf.forEach((food) => {
      sum += parseInt(food);
    });
    sums.push(sum);
  });

  sums = sums.sort((a, b) => b - a);
  return sums;
}

function getData() {
  const allData = fs.readFileSync("input.txt").toString();

  const elvesArray = allData.trim().split("\n\n");
  const allElvesArray = elvesArray.map((element) => element.trim().split("\n"));
  return allElvesArray;
}

// Run the script
main();
