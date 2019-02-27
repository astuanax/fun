/**
 * @function isEmptyArray
 * @description Verifies if the provided array is empty
 * @param {*} a - Object to verify
 * @since 1.0.2
 * @example
 * 
 * const result = isEmptyArray([0,1,2])
 * // result = false
 * const result1 = isEmptyArray([])
 * // result1 = true
 **/
import curry1 from '../_private/curry1'
import equals from './equals'

export default curry1(function isEmptyArray (a) {
    return equals([], a)
})

