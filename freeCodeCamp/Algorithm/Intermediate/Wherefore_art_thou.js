function whatIsInAName(collection, source) {
  var arr = [];

  const comparedKeys = Object.keys(source);

  collection.map((item) => {
    let result = true;
    comparedKeys.map((key) => {
      if (!item.hasOwnProperty(key)) {
        result = false;
      } else {
        if (item[key] !== source[key]) {
          result = false;
        }
      }
    });

    if (result) {
      arr.push(item);
    }
  });
  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
