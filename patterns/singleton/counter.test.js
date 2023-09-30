import Counter from "./counter";

test("incrementing first time value should be 1", () => {
  Counter.increment();
  expect(Counter.getCount()).toBe(1);
});

test("incrementing to 3", () => {
  Counter.increment();
  Counter.increment();
  expect(Counter.getCount()).toBe(3);
});

test("decrementing by 2", () => {
  Counter.decrement();
  Counter.decrement();
  expect(Counter.getCount()).toBe(1);
});

test("reset value ", () => {
  Counter.reset();
  expect(Counter.getCount()).toBe(0);
});
