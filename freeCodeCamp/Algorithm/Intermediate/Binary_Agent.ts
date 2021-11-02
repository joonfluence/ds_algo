// 1. split 메소드로 배열의 원소들을 구분한다.
// 2. 십진화 알고리즘 : 각각의 원소(이진수)들을 숫자로 변환한다.
// 3. 아스키 코드 알고리즘 : 각 숫자들을 영어로 변환한다.

function binaryAgent(str: string) {
  const numArr = str.split(" ").map((item) => parseInt(item, 2));
  console.log(`file name [Binary_Agent.ts], line -> 7 >>>>> `, numArr);
  return numArr.map((num) => String.fromCharCode(num)).join("");
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
