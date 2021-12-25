function reverseArray(a) {
  // Write your code here
  const reversedArr = [];
  a.map((item) => reversedArr.unshift(item));
  return reversedArr;
}
