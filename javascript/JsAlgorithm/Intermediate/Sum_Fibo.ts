function fibonacci(num: number) {
  let result = 0;
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    result = fibonacci(num - 2) + fibonacci(num - 1);
    return result;
  }
}

function sumFibs(sum: number) {
  let fiboSum = 0;
  let fiboIdx = 0;
  while (sum > fiboSum && sum >= fibonacci(fiboIdx)) {
    if (fibonacci(fiboIdx) % 2 !== 0) {
      fiboSum += fibonacci(fiboIdx);
    }
    fiboIdx++;
  }
  return fiboSum;
}

sumFibs(4);
