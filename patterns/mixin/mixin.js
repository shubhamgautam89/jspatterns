/*
    A mixin is an object that we can use in order to add reusable functionality to another object or class, without using inheritance. We can't use mixins on their own: their sole purpose is to add functionality to objects or classes without inheritance.
*/

//simple example with prototype

export class Dog {
  constructor(name) {
    this.name = name;
  }
}

export class Bird {
  constructor(name) {
    this.name = name;
  }
}

export class Fish {
  constructor(name) {
    this.name = name;
  }
}

const dogFunctionality = {
  bark: () => "Woof!",
  wagTail: () => "Wagging my tail",
  play: () => "Playing!",
};

const flyMixin = {
  fly() {
    return "fly";
  },
};

const swimMixin = {
  swim() {
    return "swim";
  },
};

Object.assign(Dog.prototype, dogFunctionality);
Object.assign(Bird.prototype, flyMixin);
Object.assign(Fish.prototype, swimMixin);
