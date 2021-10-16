function checkIf(arr, compared) {
  let result = true;
  arr.map((item) => {
    if (item !== compared) {
      result = false;
      return result;
    }
  });
  return result;
}

function mutation(arr) {
  const first = Array.from(arr[0]);
  const second = Array.from(arr[1]);
  let result = true;
  first.map((item) => {
    result = checkIf(second, item);
  });
  console.log(result);

  return result;
}

mutation(["hello", "hey"]);
