function solution(numbers) {
  // 문자열로 변경시키기 위한 작업
  var answer = numbers.map((e) => e + "");

  // 두 숫자를 합하고 비교함으로써, 더 큰 값을 반환할 경우로 반환된다.
  answer = answer.sort((a, b) => {
    return b + a - (a + b);
  });

  // 0으로만 배열이 구성될 경우
  if (answer[0] === "0") {
    return "0";
  }
  //문자열들의 배열을 합하기 위함이다.

  answer = answer.join("");

  return answer;
}
