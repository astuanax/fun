/**
 * @function append
 * @description Append an elment to a list
 * @param {*} el - Element to add to a list
 * @param {Array} list - List to which to add the element
 * @return {Array}
 * @example
 *
 * const l = [0, 1]
 * append('a', l) // reutnr [0, 1, 'a']
 *
 **/
import curry from './curry'
import concat from './concat'

export default curry(function append (el, list) {
  return concat(list, [ el ])
})
