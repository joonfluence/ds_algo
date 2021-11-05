const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.name = firstAndLast;

  this.getFirstName = function () {
    return this.name.split(" ")[0];
  };

  this.getLastName = function () {
    return this.name.split(" ")[1];
  };

  this.getFullName = function () {
    return this.name;
  };

  this.setFirstName = function (first) {
    this.name.split(" ").splice(0, 1, first);
  };

  this.setLastName = function (last) {
    this.name.split(" ").splice(1, 1, last);
  };

  this.setFullName = function (firstAndLast) {
    this.name = firstAndLast;
  };
};

const bob = new Person("Bob Ross");
bob.getFullName();
