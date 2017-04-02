/**
 * Created by dierickx.len on 01/04/2017.
 */
export default (x) => {
  return Object.prototype.toString.call(x).slice(8, -1)
}
