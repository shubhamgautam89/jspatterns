import UserProxy from "./proxy";
import userProxy from "./proxy";

test("unknown prop get should inform user", () => {
  const value = UserProxy.location;
  expect(value).toBe("property does not exist");
});

test("passing wrong age type as value should throw error", () => {
  try {
    UserProxy.age = "23";
  } catch (err) {
    expect(err.message).toBe("age need to be numeric");
  }
});

test("passing wrong active type as value should throw error", () => {
  try {
    UserProxy.active = "false";
  } catch (err) {
    expect(err.message).toBe("active need to be boolean");
  }
});

test("set age to 21", () => {
  UserProxy.age = 21;

  expect(userProxy.age).toBe(21);
});

test("delete unknow property should inform", () => {
  try {
    delete UserProxy.test;
  } catch (err) {
    expect(err.message).toBe("unknown property");
  }
});
