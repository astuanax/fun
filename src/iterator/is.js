/**
 * Created by dierickx.len on 01/04/2017.
 */
import is from '../is'
const isFunction = is('Function')

/**
 * @function isIterator
 * @param {iterator} iter - Accepts an iterator which can be an array, map or any other custo, implemented iterator
 * @returns {boolean}
 */
export default function isIterator (iter) {
  return isFunction(iter[Symbol.iterator])
}
