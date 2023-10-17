import { Bird, Dog, Fish } from "./mixin";

const tommyDog = new Dog("tommy");
const nemoFish = new Fish("nemo");
const redBird = new Bird("red");

test("dog test cases", () => {
  expect(tommyDog.name).toBe("tommy");
  expect(tommyDog.bark()).toBe("Woof!");
  expect(tommyDog.wagTail()).toBe("Wagging my tail");
});

test("fish test cases", () => {
  expect(nemoFish.name).toBe("nemo");
  expect(nemoFish.swim()).toBe("swim");
  expect(nemoFish).not.toHaveProperty("fly");
});

test("bird test cases", () => {
  expect(redBird.name).toBe("red");
  expect(redBird.fly()).toBe("fly");
  expect(redBird).not.toHaveProperty("swim");
});
