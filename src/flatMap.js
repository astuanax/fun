import fold from './fold'
import empty from './empty'
import concat from './concat'
import curry from './curry'
import is from './is'

const isFunction = is('Function')

/**
 * @function flatMap
 * @param fn
 * @param a
 */
export default curry(function flatMap (fn, a) {
  if (isFunction(a)) {
    return function (x) {
      return fn(a(x))(x)
    }
  }
  if (isFunction(a.flatMap)) {
    return a.flatMap(fn)
  }
  return fold((acc, x) => concat(acc, fn(x)), empty(a), a)
})
