class Dog {
  constructor(name) {
    this.name = name;
    this.greeting = "Waouf! ";
  }
  sayHello() {
    return this.greeting + "I'm " + this.name;
  }
}

class Cat {
  constructor(name) {
    this.name = name;
    this.greeting = "Miaou! ";
  }
  sayHello() {
    return this.greeting + "I'm " + this.name;
  }
}

let newDog = new Dog("Pixel");
let newCat = new Cat("Satanas");

console.log(newDog.sayHello());
console.log(newCat.sayHello());
