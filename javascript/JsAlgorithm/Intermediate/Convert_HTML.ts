function convertHTML(str: string) {
  let newStr = "";
  newStr = str.replaceAll("&", "&amp;");
  newStr = newStr.replaceAll("<", "&lt;");
  newStr = newStr.replaceAll(">", "&gt;");
  newStr = newStr.replaceAll("'", "&apos;");
  newStr = newStr.replaceAll('"', "&quot;");
  return newStr;
}

convertHTML("Dolce & Gabbana");
