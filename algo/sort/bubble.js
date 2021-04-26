const arr = [0, 7, 2, 5, 3, 6, 4, 1, 8, 9];
const n = arr.length;
let i, j, temp;

const swap = (arr, idx) => {
  const temp = arr[idx];
  arr[idx] = arr[idx - 1];
  arr[idx - 1] = temp;
};

const bubbleSort = (arr) => {
  // 첫번째 loop을 다 돌면, 가장 작은 값이 맨 왼쪽에 정렬된다. 정렬되면 신경쓰지 않는다.
  for (i = 0; i < n - 1; i++) {
    // 두번째 loop을 돌며, 맨 오른쪽 값과 그 이전 값을 비교해준다. 그 중 더 큰 값이 맨 오른쪽에 위치하여야 하므로. 마지막 값은 1보다는 커야한다.
    // 오른쪽에서 시작해서 정렬하기 시작! 따라서 j = n-1부터 시작하며 1씩 감소할 것임.
    for (j = n - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j);
      }
    }
  }
  return arr;
};

console.log(bubbleSort(arr));
