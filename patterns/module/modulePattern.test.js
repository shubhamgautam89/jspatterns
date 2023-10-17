import Modules from "./module";

Modules.defineModule("testModule", [], function () {
  function hello(kaun) {
    return "say hello to " + kaun;
  }

  return {
    hello,
  };
});

Modules.defineModule("bar", ["testModule"], function () {
  function call(who) {
    return "calling - msg received " + testModule.hello(who);
  }

  return {
    call,
  };
});

Modules.defineModule("foo", ["testModule", "bar"], function () {
  function awesome(who) {
    return "every thing is awesome and call me " + testModule.hello("maybe");
  }

  return {
    awesome,
  };
});
const testModule = Modules.getModule("testModule");
const bar = Modules.getModule("bar");
const foo = Modules.getModule("foo");

test("test.hello(`don`) should return say hello to don", () => {
  expect(testModule.hello("don")).toBe("say hello to don");
});

test("bar.call(`don`) should return calling - msg received  say hello to don", () => {
  expect(bar.call("don")).toBe("calling - msg received say hello to don");
});

test("foo.awesome should return apt return msg", () => {
  expect(foo.awesome("don")).toBe(
    "every thing is awesome and call me say hello to maybe"
  );
});
