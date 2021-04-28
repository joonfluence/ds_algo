import { swap } from "../swap.js";

function Partition(arr, left, right) {
  let pivot = left;
  let low = left + 1;
  let high = right;

  // while문을 항상 만족하는 조건은 무엇인가?
  // 결국, low가 pivot보다 커지는 시점에서 탈출한다.
  while (true) {
    while (arr[pivot] > arr[low]) {
      low++;
    }

    // high가 pivot보다 작아지는 시점에서 탈출한다. 즉, 그러한 경우가 아니라면 계속 지속된다.
    while (arr[pivot] < arr[high]) {
      high--;
    }

    if (low > high) {
      break;
    }

    swap(arr, low, high);
  }

  // 이 swap이 일어난 후, 더 이상 문제가 발생하지 않는다.
  swap(arr, left, high);

  return high;
}

function QuickSort(arr, left, right) {
  if (left > right) {
    return;
  }
  const pivot = Partition(arr, left, right);
  QuickSort(arr, left, pivot - 1);
  QuickSort(arr, pivot + 1, right);
}

(function init() {
  const array = [5, 1, 3, 7, 9, 2, 4, 6, 8];
  QuickSort(array, 0, array.length - 1);

  for (let i = 0; i < array.length; i++) {
    process.stdout.write(array[i] + " ");
  }
})();
