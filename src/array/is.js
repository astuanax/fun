/**
 * @function isArray
 * @description Checks if the provided object is an array, autocurried function 
 * @param {*} Object to verifiy
 * @returns {boolean}
 * @since 1.0.2
 * @author Len Dierickx
 * @example
 * 
 * const result = isArray([1,1,1])
 * // result = true
 */

import is from '../util/is'

export default is('Array')
