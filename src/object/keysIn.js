/**
 * Returns all the keys of an object as an Array
 *
 * @function
 * @since v1.0.2
 * @sig a -> [b]
 * @param {Object}
 * @return {Array}
 **/
import curry from '../curry'

export default curry(function keys (a) {
  const r = []
  for (const k in a) {
    r.push(k)
  }
  return r
})
