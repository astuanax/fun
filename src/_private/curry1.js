/**
 * Returns a curried function with arity 1
 * @function
 * @since v1.0.2
 **/

export default function curry1 (fn) {
  return function curried (a) {
    return arguments.length === 0
      ? fn
      : fn(a)
  }
}
