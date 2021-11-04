// 1. 숫자 더하기 : arguments로 전달된, 두 숫자를 더한다.
// 2. 각종 체크사항
// 	1) undefined인 경우, 함수를 종료한다.
// 	2) 인자로 3개 이상 전달되면 3번째 값부터는 무시된다.

function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== "number") return undefined;
  if (second === undefined) return (second) => addTogether(first, second);
  if (typeof second !== "number") return undefined;
  return first + second;
}

addTogether(2, 3);
