const Merge = (arr, left, mid, right) => {
  // ① right+1만큼의 배열을 생성한다.
  let sortArr = [];
  // ② 정렬할 대상 : arr[left] ~ arr[mid], arr[mid+1] ~ arr[right].
  // 각각의 원소들을 가리킬 idx 변수가 2개 더 필요하다.

  let LIdx = left;
  let sIdx = left;
  let RIdx = mid + 1;

  console.log("left, mid, right", left, mid, right);

  while (LIdx <= mid && RIdx <= right) {
    if (arr[LIdx] < arr[RIdx]) {
      sortArr[sIdx] = arr[LIdx++];
    } else {
      sortArr[sIdx] = arr[RIdx++];
    }
    sIdx++;
  }

  // 앞쪽 배열을 정렬된 배열에 넣었다면, 뒷쪽 배열은 그대로 옮겨준다.
  if (LIdx > mid) {
    while (RIdx <= right) {
      sortArr[sIdx] = arr[RIdx++];
      sIdx++;
    }

    // 뒷쪽 배열을 정렬된 배열에 넣었다면, 앞쪽 배열을 그대로 옮겨준다.
  } else {
    while (LIdx <= mid) {
      sortArr[sIdx] = arr[LIdx++];
      sIdx++;
    }
  }

  // ③ 정렬해야 함.

  for (let i = left; i <= right; i++) {
    arr[i] = sortArr[i];
  }

  sortArr = null;
};

const MergeSort = (arr, left, right) => {
  let mid;
  if (left < right) {
    mid = Math.floor((left + right) / 2);

    MergeSort(arr, left, mid); // left : , mid :
    MergeSort(arr, mid + 1, right); // mid + 1 : , right :

    Merge(arr, left, mid, right);
  }
};

const init = () => {
  const arr = [8, 2, 3, 7, 1, 5, 4, 6];
  MergeSort(arr, 0, 7);
  for (let i = 0; i < arr.length; i++) {
    process.stdout.write(arr[i].toString() + " ");
  }
};

init();
