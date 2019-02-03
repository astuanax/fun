/**
 * Created by dierickx.len on 25/03/2017.
 */
export default function compose() {
  let funs = Array.prototype.slice.call(arguments);

  return function () {
    let init = funs[funs.length - 1];
    let result = [init.apply(init, arguments)];
    let i = funs.length - 2;

    for (i; i >= 0; --i) {
      const fun = funs[i];

      result = [fun.apply(fun, result)];
    }
    return result[0];
  };
};

