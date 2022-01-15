function HidxCount(arr) {
  let maxNum = arr[arr.length - 1];
  let minNum = arr[0];
  let hidx = 0;
  let maxValue;
  let result = [];

  if (minNum > arr.length) {
    minNum = 0;
  }

  for (let i = minNum; i <= maxNum; i++) {
    hidx = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i <= arr[j]) {
        hidx++;
      }
    }
    result.push({ idx: i, count: hidx });
  }

  console.log(result);

  // [
  //   { idx: 0, count: 7 },
  //   { idx: 1, count: 6 },
  //   { idx: 2, count: 5 },
  //   { idx: 3, count: 4 },
  //   { idx: 4, count: 3 },
  //   { idx: 5, count: 3 },
  //   { idx: 6, count: 2 },
  //   { idx: 7, count: 1 }
  // ]

  result.map((i) => {
    if (i.idx <= i.count) {
      maxValue = i.idx;
    }
  });
  return maxValue;
}

function solution(citations) {
  const HidxNum = HidxCount(citations.sort((a, b) => a - b));
  return HidxNum;
}
console.log(solution([3, 0, 6, 1, 5, 2, 7]));
