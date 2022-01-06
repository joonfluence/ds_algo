function sentensify(str: string) {
  // Only change code below this line
  return str.split(/[ ]|[.]|[-]|[,]/g).join(" ");
  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));
console.log(sentensify("The.force.is.strong.with.this.one"));
console.log(sentensify("There,has,been,an,awakening"));
