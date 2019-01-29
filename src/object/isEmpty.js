/**
 * Created by dierickx.len on 01/04/2017.
 */

export default (x) => {
  for (let key in x) {
    if (x.hasOwnProperty(key)) { return false; }
  }
  return true;
};
