// 매개변수 : 해당 숫자인 n을 전달해주면 될 것임.
// 종료조건 : n이 1이거나 2일 때, 1을 리턴해준다.

let count = 0;

function fibo(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  if (n >= 3) {
    console.log("몇 번 실행될까요?", ++count);
    return fibo(n - 1) + fibo(n - 2);
  }
}

console.log(fibo(10));
