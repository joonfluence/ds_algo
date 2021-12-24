"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(TDArr) {
  // Write your code here
  const tempArr = [];
  for (let i = 1; i < TDArr.length - 1; i++) {
    for (let j = 1; j < TDArr[i].length - 1; j++) {
      tempArr.push([i, j]);
    }
  }

  let sum = [];
  const sumArray = (tempArr) => {
    for (let i = 0; i < tempArr.length; i++) {
      sum.push(
        TDArr[tempArr[i][0] - 1][tempArr[i][1] - 1] +
          TDArr[tempArr[i][0] - 1][tempArr[i][1]] +
          TDArr[tempArr[i][0] - 1][tempArr[i][1] + 1] +
          TDArr[tempArr[i][0]][tempArr[i][1]] +
          TDArr[tempArr[i][0] + 1][tempArr[i][1] - 1] +
          TDArr[tempArr[i][0] + 1][tempArr[i][1]] +
          TDArr[tempArr[i][0] + 1][tempArr[i][1] + 1]
      );
    }
  };

  sumArray(tempArr);
  return sum.sort((a, b) => b - a)[0];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result = hourglassSum(arr);

  ws.write(result + "\n");

  ws.end();
}
