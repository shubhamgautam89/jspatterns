import { Dog, SuperDog } from "./prototype";

const dog1 = new Dog("tommy");
const dog2 = new Dog("tiger");
const sDog = new SuperDog("pluto");
test("dog should bark", () => {
  expect(dog1.bark()).toBe("bow bow");
  expect(dog2.bark()).toBe("bow bow");
  expect(sDog.bark()).toBe("bow bow");
});

test("dog should have legsCount", () => {
  expect(dog1.getLegsCount()).toBe(4);
  expect(dog2.getLegsCount()).toBe(4);
  expect(sDog.getLegsCount()).toBe(4);
});

test("superdog should returnName", () => {
  expect(sDog.petName()).toBe("pluto");
});

test("superdog should fly", () => {
  expect(sDog.fly()).toBe("flying");
});

test("dog instance does not have fly method", () => {
  expect(dog2).not.toHaveProperty("fly");
});
