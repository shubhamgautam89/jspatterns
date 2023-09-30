/*
 * we are defining a counter with following singleton pattern.
 * There will be only one instance of counter will be available throughout the application.
 */

let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("you can create only one instannce.");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }

  reset() {
    counter = 0;
    return counter;
  }
}

//freeze instance to makes sure that consuming code cannot modify the Singleton
// freeze make sure no properties can be modified.
const globalCounter = Object.freeze(new Counter());
export default globalCounter;
