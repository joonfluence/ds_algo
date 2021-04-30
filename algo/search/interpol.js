function InterpolSearch(arr, left, right, target) {
  // 이진탐색과 달라진 점! mid 값이 다르다.
  let mid =
    Math.floor((target - arr[left]) / (arr[right] - arr[left])) *
      (right - left) +
    left;

  // 탈출조건 ?
  if (arr[left] > target || arr[right] < target) {
    return -1;
  }

  // 절반씩 탐색한다.
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    InterpolSearch(arr, left, mid - 1, target);
  } else {
    InterpolSearch(arr, mid + 1, right, target);
  }

  // 리턴값 ? true!
}

function init() {
  const arr = [];
  for (let i = 1; i < 11; i + 2) {
    arr.push(i);
  }

  const idx = InterpolSearch(arr, 0, arr.length - 1, 3);

  if (idx === -1) {
    console.log("탐색 실패!");
  } else {
    console.log(idx, "번째 인덱스에 있습니다.");
  }
}

init();
