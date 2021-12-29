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
