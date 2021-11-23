function numToArr(num: number) {
  return Array.from(String(num), (data) => Number(data));
}

function convertToRoman(num: number) {
  const numArr = numToArr(num);
  // const arrLength = numArr.length;

  // numArr.map((item, index) => {
  //   if (index === 0) {

  //   } else if (index === 1) {
  //   } else if (index === 2) {
  //   } else if (index === 3) {
  //   } else {
  //     console.log("I really don't really know, sorry man");
  //   }
  // });
  // let divider = 1;
  // while (num / divider > 0) {
  //   switch (num / divider) {
  //     case 1:
  //       return "I";
  //     case 2:
  //       return "II";
  //     case 3:
  //       return "III";
  //     case 4:
  //       return "IV";
  //     case 5:
  //       return "V";
  //     case 6:
  //       return "VI";
  //     case 7:
  //       return "VII";
  //     case 8:
  //       return "VIII";
  //     case 9:
  //       return "IX";
  //     default:
  //       break;
  //   }
  //   divider *= 10;
  // }
  return num;
}

convertToRoman(36);
