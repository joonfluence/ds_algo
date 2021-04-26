import { swap } from "../swap.js";

const arr = [0, 7, 2, 5, 3, 6, 4, 1, 8, 9];
const n = arr.length;
let i, j;

const insertionSort = (arr) => {
  for (i = 0; i < n; i++) {
    for (j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }
  return arr;
};

console.log(insertionSort(arr));
