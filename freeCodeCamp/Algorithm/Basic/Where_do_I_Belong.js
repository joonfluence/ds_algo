function getIndexToIns(arr, num) {
  const sortedArr = arr.sort((b, a) => b - a);
  let index = 0;
  for (const element of sortedArr) {
    if (element >= num) {
      return index;
    } else {
      index++;
    }
  }
  return index;
}

getIndexToIns([40, 60], 50);
