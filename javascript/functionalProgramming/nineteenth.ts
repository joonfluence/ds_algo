// Only change code below this line
function urlSlug(title: string) {
  return title.toLowerCase().trim().split(/[\s]+/g).join("-");
}
// Only change code above this line

console.log(urlSlug(" Winter Is  Coming"));

// Only change code below this line
