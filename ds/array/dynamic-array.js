function dynamicArray(n, queries) {
  // Write your code here
  let lastAnswer = 0;
  const result = [];
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = [];
  }

  queries.forEach((queryArr) => {
    const idx = (queryArr[1] ^ lastAnswer) % n;
    if (queryArr[0] === 1) {
      arr[idx].push(queryArr[2]);
    } else {
      lastAnswer = arr[idx][queryArr[2] % arr[idx].length];
      result.push(lastAnswer);
    }
  });
  return result;
}
dynamicArray(2, [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1],
]);
