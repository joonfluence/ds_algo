function uniteUnique() {
  let newArr;

  for (let index = 0; index < arguments.length; index++) {
    if (index === 0) {
      let arr = [];
      newArr = arr.concat(arguments[0]);
    } else {
      arguments[index].map((item) => {
        if (!newArr.includes(item)) {
          newArr.push(item);
        }
      });
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
