function solution(progresses, speeds) {
  const PERCENT = 100;
  const temp = [];
  var answer = [];
  let remain;

  for (let i = 0; i < progresses.length; i++) {
    remain = PERCENT - progresses[i];
    remain = Math.ceil(remain / speeds[i]);
    temp.push(remain);
  }

  console.log("temp : ", temp);
  let left = -1;
  let right = 0;
  let count;

  while (right < temp.length) {
    if (left === right) {
      right++;
      count = 1;
    } else {
      left++;
      right = left + 1;
      count = 1;
    }
    while (temp[left] >= temp[right]) {
      if (right === temp.length) {
        break;
      }
      right++;
      count++;
      if (temp[left] < temp[right]) {
        left = right;
        break;
      }
    }
    answer.push(count);
  }

  return answer;
}

console.log("solution : ", solution([93, 30, 55], [1, 30, 5]));
console.log(" ");
console.log(
  "solution : ",
  solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])
);
