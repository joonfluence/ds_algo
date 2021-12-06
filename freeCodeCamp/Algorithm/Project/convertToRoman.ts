function ArrayforLoop(arr: string[], tryNum: number, creature: string) {
  for (let index = 0; index < tryNum; index++) {
    arr.push(`${creature}`);
  }
}

function convertToRoman(num: number) {
  const arr: string[] = [];
  let tempNum = num;

  while (tempNum >= 1) {
    if (tempNum >= 1000) {
      const tryNumber = Math.floor(tempNum / 1000);
      ArrayforLoop(arr, tryNumber, "M");
      tempNum %= 1000;
    } else if (tempNum >= 500) {
      if (Math.floor((tempNum / 100) % 5) === 4) {
        arr.push("CM");
        tempNum %= 900;
      } else {
        ArrayforLoop(arr, Math.floor(tempNum / 500), "D");
        tempNum %= 500;
      }
    } else if (tempNum >= 100) {
      if (Math.floor(tempNum / 100) === 4) {
        arr.push("CD");
      } else {
        ArrayforLoop(arr, Math.floor(tempNum / 100), "C");
      }
      tempNum %= 100;
    } else if (tempNum >= 50) {
      if (Math.floor((tempNum / 10) % 5) === 4) {
        arr.push("XC");
        tempNum %= 90;
      } else {
        ArrayforLoop(arr, Math.floor(tempNum / 50), "L");
        tempNum %= 50;
      }
    } else if (tempNum >= 10) {
      if (Math.floor(tempNum / 10) === 4) {
        arr.push("XL");
      } else {
        ArrayforLoop(arr, Math.floor(tempNum / 10), "X");
      }
      tempNum %= 10;
    } else if (tempNum >= 5) {
      if (Math.floor(tempNum % 5) === 4) {
        arr.push("IX");
        break;
      } else {
        ArrayforLoop(arr, Math.floor(tempNum / 5), "V");
      }
      tempNum %= 5;
    } else {
      if (tempNum === 4) {
        arr.push("IV");
      } else {
        ArrayforLoop(arr, tempNum / 1, "I");
      }
      break;
    }
  }
  return arr.join("");
}

convertToRoman(99);
