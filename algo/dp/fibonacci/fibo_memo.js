// 종료조건 : res 배열에 값이 할당되었는지를 따져줘야 함. 그래야, 캐싱 기능을 사용할 수 있게 된다.

let count = 0;

function fibo(n, res) {
  // res 배열에 값이 할당되었을 경우, 해당 값을 바로 리턴해줘야 한다.

  if (res[n]) {
    console.log("n은요?", n, "캐싱된 값입니다", res[n]);
    return res[n];
  }

  if (n === 1 || n === 2) {
    console.log("저장~", n);
    res[n] = 1;
    return res[n];
  }

  if (n >= 3) {
    console.log("몇 번 실행될까요?", ++count, "n은요?", n);
    res[n] = fibo(n - 1, res) + fibo(n - 2, res);
    return res[n];
  }
}

console.log(fibo(5, []));
