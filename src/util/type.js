/**
 * Created by dierickx.l on 01/04/2017.
 */
export default (x) => {
    return Object.prototype.toString.call(x).slice(8, -1)
}