// bottom-up 방식이 되려면, 1과 2에 해당하는 작은 숫자들이 먼저 실행되어야 한다.

let count = 0;

function fibo(n, res) {
  res[1] = 1;
  res[2] = 1;
  for (let i = 3; i <= n; i++) {
    console.log("몇 번 실행했을까요?", ++count);
    res[i] = res[i - 2] + res[i - 1];
  }
  return res[n];
}

console.log(fibo(10, []));
