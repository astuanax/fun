/**
 * Returns true when both predicates return true
 *
 * @function
 * @since v1.0.2
 * @param {Function} fn1 A predicate function
 * @param {Function} fn2 A predicate function
 * @return {Boolean}
 **/
import curry from '../curry'
import lift from '../lift'
import and from '../and'
import is from '../is'

export default curry(function both (fn1, fn2) {
  return is('Function')(fn1)
    ? function _both () { return fn1.apply(this, arguments) && fn2.apply(this, arguments) }
    : lift(and)(fn1, fn2)
})
