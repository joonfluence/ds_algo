function isPrime(num) {
  if (num <= 3) return num > 1;

  if (num % 2 === 0 || num % 3 === 0) return false;

  let count = 5;

  while (Math.pow(count, 2) <= num) {
    if (num % count === 0 || num % (count + 2) === 0) return false;

    count += 6;
  }

  return true;
}

function sumPrimes(num) {
  let sum = 0;
  for (let index = 2; index <= num; index++) {
    if (isPrime(index)) {
      sum += index;
    }
  }
  return sum;
}

sumPrimes(10);
