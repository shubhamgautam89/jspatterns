/*
 * With the observer pattern, we can subscribe certain objects, the observers, to another object, called the observable. Whenever an event occurs, the observable notifies all its observers!
 */

class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(f) {
    this.observers.push(f);
  }

  unsubscribe(f) {
    this.observers = this.observers.filter((subs) => subs !== f);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

export default Observable;
