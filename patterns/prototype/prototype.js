/*
    * Protoype pattern is very specific to JS, where every object have it's prototype linked defined.
    * The prototype pattern allows us to easily let objects access and inherit properties from other objects. Since the prototype chain allows us to access properties that aren't directly defined on the object itself, we can avoid duplication of methods and properties, thus reducing the amount of memory used.


*/

export class Dog {
  constructor(name) {
    this.name = name;
    this.legs = 4;
  }

  bark() {
    return "bow bow";
  }

  petName() {
    return this.name;
  }

  getLegsCount() {
    return this.legs;
  }
}

export class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    return "flying";
  }
}
