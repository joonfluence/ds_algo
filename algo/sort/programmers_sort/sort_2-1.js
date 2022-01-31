function isFrontMax(a, b) {
  let aStr = String(a);
  let bStr = String(b);

  return aStr + bStr > bStr + aStr;
}

function sort(queue) {
  if (queue.length === 0) {
    return queue;
  }
  const middleIndex = Math.floor(queue.length / 2);
  const minArr = [];
  const maxArr = [];

  for (let i = 0; i < queue.length; i++) {
    if (i === middleIndex) {
      continue;
    }
    if (isFrontMax(queue[i], queue[middleIndex])) {
      maxArr.push(queue[i]);
    } else {
      minArr.push(queue[i]);
    }
  }
  return [...sort(maxArr), queue[middleIndex], ...sort(minArr)];
}

function solution(numbers) {
  const a = sort(numbers);
  if (a[0] == "0") {
    return "0";
  }
  return a.join("");
}

console.log(solution([6, 10, 2]));
