class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  sayHello() {
    return "Hello " + this.firstname + this.lastname;
  }
}

let newInstance = new Person("Bruno ", "Presti");
console.log(newInstance.sayHello());
