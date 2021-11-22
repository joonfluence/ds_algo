function palindrome(str: string) {
  const newStr = str
    .toLowerCase()
    .replace(/[ ]|[,]|[-]|[_]|[.]|[(]|[)]/g, "")
    .split("");
  return newStr.join("") === newStr.reverse().join("");
}
