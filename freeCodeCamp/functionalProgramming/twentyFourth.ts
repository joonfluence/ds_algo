function add(x: number) {
  // Only change code below this line
  return function (y: number) {
    return function (z: number) {
      return x + y + z;
    };
  };
  // Only change code above this line
}

add(10)(20)(30);
