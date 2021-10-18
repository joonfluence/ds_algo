// 백준 1463 1이 될 때까지. https://www.acmicpc.net/problem/1463

// function greedy(N, K) {
//   let count = 0;
//   while (N > 1) {
//     // N이 K로 나눠진다면 N을 K로 나눈다.
//     if (N % K === 0) {
//       N = N / K;
//       count++;
//       // N이 K로 나눠지지 않는다면 N을 1로 뺀 후, 대입한다.
//     } else {
//       N = N - 1;
//       count++;
//     }
//   }
//   return count;
// }

// console.log(`file name [03.js], line -> 16 >>>>> `, greedy(19, 4));

let count = 0;
let X = 19;
while (X > 1) {
  // N이 K로 나눠진다면 N을 K로 나눈다.
  if (X % 3 === 0) {
    X = X / 3;
    count++;
    // N이 K로 나눠지지 않는다면 N을 1로 뺀 후, 대입한다.
  } else if (X % 2 === 0) {
    X = X / 2;
    count++;
  } else {
    X = X - 1;
    count++;
  }
}

console.log(count);
