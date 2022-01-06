function titleCase(str) {
  const letters = str.split(" ");
  let result = [];
  letters.map((letter) => {
    let array = Array.from(letter);
    for (var i = 0; i < array.length; i++) {
      if (i === 0) {
        if (array[0] !== array[0].toUpperCase()) {
          array[0] = array[0].toUpperCase();
        }
      } else {
        array[i] = array[i].toLowerCase();
      }
    }
    result.push(array.join(""));
  });
  console.log(result.join(" "));
  return result.join(" ");
}

titleCase("I'm a little tea pot");
