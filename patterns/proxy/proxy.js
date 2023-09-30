/*
 *  instead of interacting with the target object directly, we'll interact with the Proxy object.
 */

const user = {
  name: "test-user",
  age: 43,
  job: "user",
  id: "asdsa+@#2#)",
  active: true,
};

const userProxy = new Proxy(user, {
  get: (obj, prop) => {
    const propValue = Reflect.get(obj, prop);
    return propValue || "property does not exist";
  },

  set: (obj, prop, value) => {
    console.log(prop, typeof value);
    if (prop === "age" && typeof value !== "number") {
      console.log(prop, typeof value, 1);
      throw new Error("age need to be numeric");
    }

    if (prop === "active" && typeof value !== "boolean") {
      return "active need to be boolean";
    }

    Reflect.set(obj, prop, value);
    return true;
  },

  deleteProperty: (obj, prop) => {
    if (!obj[prop]) {
      throw new Error("unknown property");
    }

    Reflect.deleteProperty(obj, prop);
  },
});

export default userProxy;
