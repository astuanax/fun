/**
 * Created by dierickx.l on 01/04/2017.
 */
import isArray from './isArray'

export default (x) => {
    return isArray(x) ? new Array() : void 0
}