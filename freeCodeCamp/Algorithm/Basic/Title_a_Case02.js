function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function (val) {
    return val.replace(val[0], val[0].toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");
