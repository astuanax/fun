/**
 * @function call
 * @param fn
 * @returns {*}
 */
// import curry1 from './_private/curry1'
import curry from './curry'

export default curry(function call (fn) {
  return fn.apply(fn, [].slice.call(arguments, 1))
})
