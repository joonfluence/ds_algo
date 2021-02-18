// 입력 배열과 출력 배열, 그리고 방문 여부를 확인할 배열을을 정의한다.

const inputArr = [1, 2, 3];
const visited = [];
const resultArr = [];
const result = [];
const result2 = [];
/* 

순열로 출력할 수 있는 경우의 수, 총 6가지.
[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]

1) dfs(0)을 실행할 때, 결과 배열의 첫번째 요소에 input의 원소들을 한번씩 할당해줄 것. 
    resultArr[0] = 1,
    resultArr[0] = 2,
    resultArr[0] = 3,

2) dfs(1)
    이를 for 문으로 여러번 호출한다.

*/

// 결괏값을 배열 형태로 바꿔주면 끝이다.

function dfs(n) {
  if (n === inputArr.length) {
    for (let i = 0; i < resultArr.length; i++) {
      //   result2.push(resultArr[i]);
      process.stdout.write(`${resultArr[i]}`);
    }
    console.log("");
    // result.concat(result2);
    // process.stdout.write(`${result}`);
    // console.log(result2);
    // console.log("");
  } else {
    for (let i = 0; i < inputArr.length; i++) {
      //재귀적으로 dfs를 호출한다. dfs의 n이 inputArr의 lenth와 같으면 출력한다.
      if (!visited[i]) {
        visited[i] = true;
        resultArr[n] = inputArr[i];
        dfs(n + 1);
        visited[i] = false;
      }
    }
  }
}

dfs(0);
