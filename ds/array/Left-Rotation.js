function rotateLeft(d, arr) {
  // Write your code here

  const size = arr.length;
  const tempArr = new Array(size);

  arr.forEach((_, idx) => {
    if (idx - d >= 0) {
      tempArr[idx - d] = arr[idx];
    } else {
      tempArr[idx - d + size] = arr[idx];
    }
  });

  return tempArr;
}

const result = rotateLeft(4, [1, 2, 3, 4, 5]);
console.log(result.join(" ") + "\n");
