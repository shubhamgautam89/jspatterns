/*
 *By retaining an inner reference to the public API object inside your module instance, you can modify that module instance from the in¬ side, including adding and removing methods and properties, and changing their values.
 */

let MyModules = (function ModuleMangare() {
  let modules = {};

  const defineModule = (name, deps, impl) => {
    for (let i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply(impl, deps);
  };

  const getModule = (moduleName) => {
    return modules[moduleName];
  };

  return {
    defineModule,
    getModule,
  };
})();

export default MyModules;
