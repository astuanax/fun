/**
 * REturns true of both predicates return true
 *
 * @function
 * @since v1.0.2
 * @param {Function} fn1 A predicate function
 * @param {Function} fn2 A predicate function
 * @return {Boolean}
 **/
import curry from '../util/curry'

export default curry(function both (fn1, fn2) {
  return function () {
    return fn1.apply(fn1, arguments) && fn2.apply(fn2, arguments)
  }
})
