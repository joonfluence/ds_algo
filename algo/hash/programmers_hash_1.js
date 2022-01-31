function isEqual(arrOne, arrTwo) {
  let diffIdx;
  console.log(arrOne);
  console.log(arrTwo);
  for (let i = 0; i < arrOne.length; i++) {
    if (typeof arrTwo[i] === "undefined") {
      diffIdx = i;
      break;
    }
    if (arrOne[i] !== arrTwo[i]) {
      diffIdx = i;
      break;
    }
  }
  return diffIdx;
}

function solution(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();

  answer = participant[isEqual(participant, completion)];
  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
