/* eslint-disable no-use-before-define */
/**
 * Created by dierickx.len on 25/03/2017.
 */
export default function curry(fun) {
  let argslen = fun.length;

  if (argslen === 0) {
    return fun;
  }
  return createRecurser([]);

  function recurse(acc, args) {
    let _acc = acc.concat(args);

    if (_acc.length < argslen) {
      return createRecurser(_acc);
    }
    return fun.apply(this, _acc);
  }

  function createRecurser(acc) {
    return function () {
      let args = Array.prototype.slice.call(arguments);

      return recurse(acc, args);
    };
  }
}
