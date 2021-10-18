const increase = (function () {
  // 카운트 상태 변수
  let num = 0;
  console.log(num);

  // 클로저
  return function () {
    // 카운트 상태를 1만큼 증가 시킨다.
    return ++num;
  };
})();

console.log(increase());
console.log(increase());
console.log(increase());

const increaseTwo = function () {
  // 카운트 상태 변수
  let num = 0;
  console.log(num);

  // 클로저
  return function () {
    // 카운트 상태를 1만큼 증가 시킨다.
    return ++num;
  };
};

console.log(increaseTwo());
console.log(increaseTwo());
console.log(increaseTwo());

const x = 1;

// ①
function outer() {
  const x = 10;
  const inner = function () {
    console.log(++x);
  }; // ②
  return inner;
}

// outer 함수를 호출하면 중첩 함수 inner를 반환한다.
// 그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 팝되어 제거된다.
const innerFunc = outer(); // ③
innerFunc(); // ④ 10
