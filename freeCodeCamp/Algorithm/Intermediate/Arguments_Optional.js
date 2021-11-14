// 1. 숫자 더하기 : arguments로 전달된, 두 숫자를 더한다.
// 2. 각종 체크사항
// 	1) undefined인 경우, 함수를 종료한다.
// 	2) 인자로 3개 이상 전달되면 3번째 값부터는 무시된다.

const addTogether = function () {
  const [first, last] = arguments;

  if (typeof first !== "number") return undefined;
  if (typeof last === "string") return undefined;
  if (typeof last === "undefined") {
    return function (last) {
      return addTogether(first, last);
    };
  }
  if (typeof last !== "number") return undefined;

  return first + last;
};

console.log(addTogether(5)(7));
