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

  let left = -1;
  let right = 0;
  let count;

  while (right < temp.length) {
    if (left !== right) {
      left++;
    }
    right++;
    count = 1;
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
