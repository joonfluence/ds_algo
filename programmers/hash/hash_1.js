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
  const sortedArr = participant.sort();
  const sortedArrTwo = completion.sort();

  answer = completion[isEqual(sortedArr, sortedArrTwo)];
  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
