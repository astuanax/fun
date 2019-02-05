/**
 * Created by dierickx.len on 18/03/2017.
 */

export default function toArray (x) {
  return x.length === 1 ? [x[0]] : Array.apply(null, x)
};
