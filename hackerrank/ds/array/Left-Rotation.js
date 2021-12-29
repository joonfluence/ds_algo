// each of the array's elements  unit to the left.
// n = the number of integers
// d = the number of left rotation to perform
// 옮길 인덱스 : 해당 인덱스 - d (양수), 해당 인덱스 - d + n (음수)

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
