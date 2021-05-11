function solution(clothes) {
  let answer = 1;

  let type = {};
  for (let cloth of clothes) {
    if (type[cloth[1]]) {
      type[cloth[1]]++;
    } else {
      type[cloth[1]] = 1;
    }
  }

  for (let i of Object.keys(type)) {
    answer *= type[i] + 1;
  }

  return answer - 1;
}
