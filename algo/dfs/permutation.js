// 입력 배열과 출력 배열, 그리고 방문 여부를 확인할 배열을을 정의한다.
let temp = [];
// let resultArr
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

function dfs(n, resultArr, inputArr, visited, res) {
  if (n === inputArr.length) {
    temp = [];
    for (let i = 0; i < resultArr.length; i++) {
      temp.push(resultArr[i]); // push : resultArr에 값이 안들어도록. 방문처리.
    }
    res.push(Array.from(temp));
  } else {
    for (let i = 0; i < inputArr.length; i++) {
      //재귀적으로 dfs를 호출한다. dfs의 n이 inputArr의 lenth와 같으면 출력한다.
      if (!visited[i]) {
        // resultArr에 포함되어 있는지 살펴볼 수 있을 것임.
        visited[i] = true; // 중복되어서 값이 안들어도록. 중복되지 않은 값을
        resultArr[n] = inputArr[i]; // resultArr : 1, 2, 3. 1을 사용하지 못하도록 방문처리해서 보냈고, dfs(1) 3번, 실행됨. dfs(2) .. dfs(3)
        // resultArr.push(inputArr[i]);
        dfs(n + 1, resultArr, inputArr, visited, res);
        visited[i] = false;
      }
    }
  }
}

function permute(inputArr) {
  let res = [];
  dfs(0, [], inputArr, [], res);
  return res;
}

console.log(permute([1, 2, 3]));
