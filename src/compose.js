/**
 * @function compose
 * @returns {function(): *}
 */
export default function compose () {
  let funs = Array.prototype.slice.call(arguments)

  return function _compose () {
    let init = funs[funs.length - 1]
    let result = [init.apply(init, arguments)]
    let i = funs.length - 2

    for (i; i >= 0; --i) {
      const fun = funs[i]

      result = [fun.apply(fun, result)]
    }
    return result[0]
  }
};
