const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr: number[]) {
  // Only change code below this line

  const newArr = arr.slice(0, arr.length);
  return newArr.sort((a, b) => a - b);

  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));
