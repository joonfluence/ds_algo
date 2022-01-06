function MissingLetters(str: string) {
  const ABCS = "abcdefghijklmnopqrstuvwxyz";
  const abcLetters = ABCS.split("");
  const letters = str.split("");
  const first = abcLetters.indexOf(letters[0]);
  const last = abcLetters.indexOf(letters[letters.length - 1]);

  console.log(first, last);
  const rightWords = abcLetters.slice(first, last + 1);

  let check;
  let result;
  rightWords.forEach((item, idx) => {
    check = letters.includes(item);
    if (!check) {
      result = item;
    }
  });
  return result;
}

MissingLetters("abce");
