function greedy(num) {
  const fiveHundred = Math.floor(num / 500);
  const oneHundred = Math.floor((num - 500 * fiveHundred) / 100);
  const ten = Math.floor((num - 500 * fiveHundred - 100 * oneHundred) / 10);
  const one = (num - ten * 10 - 500 * fiveHundred - 100 * oneHundred) / 1;

  return [fiveHundred, oneHundred, ten, one];
}

console.log(greedy(1500));
