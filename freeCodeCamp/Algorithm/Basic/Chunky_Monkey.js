function chunkArrayInGroups(arr, size) {
  let index = 0;
  let breakPointIdx = 0;
  let indexArr = [];
  let result = [];
  while (index < arr.length) {
    index += size;
    indexArr.push(index);
  }

  for (const breakPoint of indexArr) {
    result.push(arr.slice(breakPointIdx, breakPoint));
    breakPointIdx = breakPoint;
  }

  return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
