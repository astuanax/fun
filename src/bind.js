import curry from './curry'

/**
 * @function bind
 * @description Bind a function to a context
 * @param {function }fn
 * @param {*} context
 * @returns {*}
 */
export default curry(function bind (fn, context) {
  return fn.bind(context)
})
