const squareList = (arr) => {
  // Only change code below this line
  return arr
    .filter((item) => item > 0 && item % 1 === 0)
    .map((item) => item * item);
  // Only change code above this line
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
