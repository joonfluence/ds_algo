function pairElement(str: string): string[][] {
  const strArr = str.split("");
  const result = strArr.map((item) => {
    const temp = Array.from(item);
    if (item === "G") {
      temp.push("C");
    } else if (item === "C") {
      temp.push("G");
    } else if (item === "A") {
      temp.push("T");
    } else {
      temp.push("A");
    }
    return temp;
  });
  console.log(result);
  return result;
}

pairElement("GCG");
