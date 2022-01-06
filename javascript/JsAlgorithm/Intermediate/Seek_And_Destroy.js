function destroyer(arr) {
  const agumentsArr = Array.from(arguments);

  agumentsArr.map((item, idx) => {
    if (idx !== 0) {
      while (arr.includes(item)) {
        let index = arr.indexOf(item);
        arr.splice(index, 1);
      }
    }
  });

  console.log(arr);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
