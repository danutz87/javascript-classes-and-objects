const name = "Daniel";

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 2));

const arrowSum = (a, b) => {
  return a + b;
};

// Currying: we use the clojure concept to make this possible
const arrowSumCurried = (a) => {
  return (b) => {
    return a + b;
  };
};

console.log(arrowSumCurried(3)(2));

const daniel = {
  name: "Daniel",
  age: 33,
  job: "Software Developer",
  sayHi: function () {
    // console.log("Hi my name is " + this.name + " and I'm a " + this.job);
    console.log(`Hi my name is ${this.name} and I am a ${this.job}`);
  }
};

daniel.sayHi();

function Person(first, last, age, eye, job) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.job = job;
  this.sayHi = function () {
    // console.log("Hi my name is " + this.name + " and I'm a " + this.job);
    console.log(
      `Hi my name is ${this.firstName} ${this.lastName} and I am a ${this.job}`
    );
  };
}

const john = new Person("John", "Travolta", 45, "blue", "actor");

john.sayHi();

class PersonClass {
  constructor(first, last, age, eye, job) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eye = eye;
    this.job = job;
  }

  sayHi() {
    console.log(
      `Hi my name is ${this.firstName} ${this.lastName} and I am a ${this.job}`
    );
  }
}

const newJohn = new PersonClass("John", "Travolta", 45, "blue", "actor");

newJohn.sayHi();

class DanielClass extends PersonClass {
  constructor(last, age, eye, job) {
    super(undefined, last, age, eye, job);
    this.firstName = "Daniel";
  }
  code() {
    console.log(`Hi, my name is ${this.firstName} and I code.`);
  }
}

const daniel2 = new DanielClass("Travolta", 45, "blue", "actor");

daniel2.code();

// Callbacks

function caller(callback) {
  // I am waiting for somthing to happen
  callback();
}

caller(() => console.log("I am being called."));
