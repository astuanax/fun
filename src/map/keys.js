/**
 * Returns the own keys of an Map as an Array
 *
 * @function
 * @since v1.0.2
 * @sig a -> [b]
 * @param {Object}
 * @return {Array}
 **/
import curry from '../curry'

export default curry(function keys (a) {
  return a.keys()
})
