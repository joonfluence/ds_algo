// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(arr: string[], bookName: string) {
  const newArr = [...arr];
  newArr.push(bookName);
  return newArr;
  // Change code above this line
}

// Change code below this line
function remove(arr: string[], bookName: string) {
  const newArr = [...arr];
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {
    newArr.splice(book_index, 1);
    return newArr;
    // Change code above this line
  }
}

const newBookList = add(bookList, "A Brief History of Time");
const newerBookList = remove(
  bookList,
  "On The Electrodynamics of Moving Bodies"
);
const newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);

console.log(bookList);
console.log(newestBookList);
