function isPrime(num: number) {
  return true;
}

function sumPrimes(num: number) {
  let sum = 0;
  for (let index = 0; index < num; index++) {
    if (isPrime(index)) {
      sum += index;
    }
  }
  return num;
}

sumPrimes(10);
