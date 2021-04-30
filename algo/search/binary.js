function binarySearch(arr, left, right, target) {
  let mid = Math.floor((left + right) / 2);

  // 탈출조건 ?
  if (left > right) {
    return;
  }

  // 절반씩 탐색한다.
  if (arr[mid] === target) {
    console.log(mid, "번째 인덱스에 있습니다.");
    return mid;
  } else if (arr[mid] > target) {
    binarySearch(arr, left, mid - 1, target);
  } else {
    binarySearch(arr, mid + 1, right, target);
  }

  // 리턴값 ? true!
}

function init() {
  const arr = [];
  for (let i = 1; i < 10; i++) {
    arr.push(i);
  }

  binarySearch(arr, 0, arr.length - 1, 6);
}

init();
