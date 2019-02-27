/**
 * @function isArray
 * @description Verify if the provided object is an array
 * @author Len Dierickx
 * @param {*} x - Object to verify
 * @returns {boolean}
 */
import isArray from './is'

export default function is (x) {
  return isArray(x) ? [] : void 0
};
