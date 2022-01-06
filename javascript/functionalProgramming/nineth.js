// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  // Only change code below this line
  const newArray = [];
  s.forEach((item) => {
    if (callback(item)) {
      newArray.push(item);
    }
  });
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});

console.log(`file name [nineth.js], line -> 16 >>>>> `, new_s);
