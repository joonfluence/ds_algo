function myReplace(str: string, before: string, after: string) {
  const strArr = str.split(" ");
  let beforeArr = Array.from(before);
  let afterArr = Array.from(after);

  const toBeReplacedIdx = strArr.indexOf(before);

  if (beforeArr[0] === beforeArr[0].toUpperCase()) {
    afterArr.splice(0, 1, afterArr[0].toUpperCase());
  } else {
    afterArr.splice(0, 1, afterArr[0].toLowerCase());
  }

  strArr.splice(toBeReplacedIdx, 1, afterArr.join(""));
  return console.log(strArr.join(" "));
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
