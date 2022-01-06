function orbitalPeriod(arr: { name: string; avgAlt: number }[]) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const axios = arr[0].avgAlt;

  const result = 2 * Math.PI * Math.sqrt(Math.pow(axios, 3) / GM);
  console.log(`file name [Map_the_debris.ts], line -> 4 >>>>> `, result);
  return arr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
