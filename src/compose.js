/**
 * @function compose
 * @returns {function(): *}
 */
export default function compose () {
  let fns = Array.prototype.slice.call(arguments)

  return function _compose () {
    let init = fns[fns.length - 1]
    let result = [init.apply(init, arguments)]
    let i = fns.length - 2

    for (i; i >= 0; --i) {
      const fn = fns[i]

      result = [fn.apply(fn, result)]
    }
    return result[0]
  }
};
