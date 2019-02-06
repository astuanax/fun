/**
 * Returns true if at least on of the items in the enumerable match the predicate
 *
 * @function
 * @since v1.0.2
 * @sig (TODO)
 * @param {Function} cb
 * @param {Iterable} a
 * @return {Boolean}
 **/
import curry from '../util/curry'

export default curry(function any (cb, a) {
  let res = false
  for (let i in a) {
    if (cb(a[i])) {
      res = true
      break
    }
  }
  return res
})
