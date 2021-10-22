function translatePigLatin(str) {
  const vowels = str.match(/[aeiou]/g);

  if (!vowels) {
    return str + "ay";
  }

  const strArr = Array.from(str);
  const firstConsontantIdx = strArr.indexOf(vowels[0]);
  const words = strArr.splice(0, firstConsontantIdx);

  let result;

  if (words.length !== 0) {
    result = strArr.join("") + words.join("") + "ay";
  } else {
    result = strArr.join("") + words.join("") + "way";
  }

  return result;
}

translatePigLatin("california");
