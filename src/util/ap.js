/**
 * Applies a list of functions to a list of values and returns a combined result array
 *
 * @function
 * @since v1.0.2
 * @sig @sig [a -> b] -> [a] -> [b]
 * @param {[Function] | {Function} | {Applicative}} fns - An array of functions or a function or an applicative
 * @param {[*]} vals - An array of values
 * @return {Iterable} [a]
 **/
import curry from '../util/curry'
import is from '../util/is'
import fold from '../array/fold'
import map from '../array/map'

const isFunction = is('Function')

export default curry(function ap (fns, vals) {
  if (isFunction(fns.ap)) {
    return fns.ap(vals)
  }
  if (isFunction(fns)) {
    return x => fns(x)(vals(x))
  }
  return fold((acc, f) => acc.concat(map(f, vals)), [], fns)
})
