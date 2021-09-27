function solution(n, lost, reserve) {
  let answer = n - lost.length;
  return answer;
}

solution(5, [2, 4], [1, 3, 5]); // expected Output : 5
solution(5, [2, 4], [3]); // expected Output : 4
solution(3, [3], [1]); // expected Output : 2
