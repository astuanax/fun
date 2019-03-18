/**
 * Returns true if all items in the enumerable match the predicate
 *
 * @function all
 * @description Returns true if all items in the enumerable match the predicate
 * @since v1.0.2
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} cb
 * @param {Iterable} a
 * @return {Boolean}
 **/
import curry from '../util/curry'

export default curry(function all (cb, a) {
  let res = true
  for (let i in a) {
    if (!cb(a[i])) {
      res = false
      break
    }
  }
  return res
})
