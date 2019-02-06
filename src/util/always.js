/**
 * Returns a function with the initial value provided
 *
 * @function
 * @since v1.0.2
 * @sig a -> (* -> a)
 * @param {*} a
 * @return {Function}
 **/
import curry from '../util/curry'

export default curry(function always (x) {
  return function () { return x }
})
