function dropElements(arr, func) {
  while (!func(arr[0]) && arr.length > 0) {
    arr.shift();
  }

  return arr;
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});
