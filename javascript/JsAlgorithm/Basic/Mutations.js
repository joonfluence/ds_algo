function mutation(arr) {
  const first = Array.from(arr[0].toLowerCase());
  const second = Array.from(arr[1].toLowerCase());
  let result = true;
  second.map((item) => {
    if (!first.includes(item)) {
      result = false;
    }
  });
  console.log(result);
  return result;
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
