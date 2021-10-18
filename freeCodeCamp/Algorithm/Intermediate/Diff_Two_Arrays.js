function diffArray(arr1, arr2) {
  var newArr = [];

  arr2.map((item) => {
    if (!arr1.includes(item)) {
      newArr.push(item);
    }
  });
  arr1.map((item) => {
    if (!arr2.includes(item)) {
      newArr.push(item);
    }
  });

  console.log(`file name [Diff_Two_Arrays.js], line -> 9 >>>>> `, newArr);
  return newArr;
}

diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);
