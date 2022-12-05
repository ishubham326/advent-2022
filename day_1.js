/* TO RUN -> Navigate to same directory, include input.txt file and type `node day_1.js`
 * File setup should be:
 * my_problem_folder >
 *  - input_1.txt
 *  - day_1.js
 */

const fs = require("fs");
const { parse } = require("path");
const inputArray = fs.readFileSync(`./input_1.txt`, "utf8").split("\n");
const totalCal = [];
let totalCalTemp = 0;
inputArray.forEach((cal) => {
  if (cal === "") {
    totalCal.push(totalCalTemp);
    totalCalTemp = 0;
  } else totalCalTemp += parseInt(cal);
});

console.log(totalCal);
console.log("Top: ", Math.max(...totalCal));
console.log(totalCal.sort((a, b) => b - a));
console.log("Top three: ", totalCal[0] + totalCal[1] + totalCal[2]);
