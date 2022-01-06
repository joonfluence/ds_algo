const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  let name = {
    firstName: firstAndLast.split(" ")[0],
    lastName: firstAndLast.split(" ")[1],
  };

  this.getFirstName = () => {
    return name.firstName;
  };

  this.getLastName = () => {
    return name.lastName;
  };

  this.getFullName = () => {
    return name.firstName + " " + name.lastName;
  };

  this.setFirstName = (first) => {
    name.firstName = first;
  };

  this.setLastName = (last) => {
    name.lastName = last;
  };

  this.setFullName = (fullName) => {
    name.firstName = fullName.split(" ")[0];
    name.lastName = fullName.split(" ")[1];
  };
};

const bob = new Person("Bob Ross");
bob.setFirstName("Haskell");
bob.getFullName();
