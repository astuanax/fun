/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function
 *
 * @function lift
 * @since v1.0.2
 * @sig (*... -> *) -> ([*]... -> [*])
 **/
import curry from './curry'
import curry1 from './_private/curry1'
import fold from './fold'
import ap from './ap'
import map from './map'

export default curry(function lift (fn) {
  const lifted = curry1(curry(fn))
  return curry(function _lift () {
    return fold(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1))
  })
})
