const arr = [0, 7, 2, 5, 3, 6, 4, 1, 8, 9];
const n = arr.length;
let i, j, min, minIdx;

const swap = (arr, idxA, idxB) => {
  const temp = arr[idxA];
  arr[idxA] = arr[idxB];
  arr[idxB] = temp;
};

const insertionSort = (arr) => {
  // 가장 왼쪽에서부터 시작한다.
  for (i = 0; i < n; i++) {
    // 가장 오른쪽에서부터 시작한다.
    min = arr[i];
    minIdx = i;
    for (j = n - 1; j > i; j--) {
      if (min > arr[j]) {
        min = arr[j];
        minIdx = j;
      }
    }
    swap(arr, i, minIdx);
  }
  return arr;
};

console.log(insertionSort(arr));
