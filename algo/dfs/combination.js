// 입력 배열과 출력 배열, 그리고 방문 여부를 확인할 배열을을 정의한다.

const inputArr = [1, 2, 3];
const result = [];
const temp = [];
const result2 = [];
let size = 0;

/* 
조합으로 출력할 수 있는 경우의 수, 총 3가지.
[1, 2], [1, 3], [2, 3]
결괏값을 배열 형태로 바꿔주면 끝이다.
*/

function dfs(n, resultArr, inputArr, visited, size, number, res) {
  if (n === inputArr.length) {
    for (let i = 0; i < resultArr.length; i++) {
      if (visited[i] && size === number) {
        temp.push(resultArr[i]);
      }
    }
    res.push(Array.from(temp));
  } else {
    visited[n] = true;
    resultArr[n] = inputArr[n];
    size++;
    dfs(n + 1, resultArr, inputArr, visited, size, number, res);
    visited[n] = false;
    size--;
    dfs(n + 1, resultArr, inputArr, visited, size, number, res);
  }
}

function combination(inputArr, n, k) {
  let res = [];
  dfs(0, [], inputArr, Array(inputArr.length), n, k, res);
  return res;
}

console.log(combination([1, 2, 3, 4], 4, 2));
