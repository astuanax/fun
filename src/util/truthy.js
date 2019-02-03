/**
 * Created by dierickx.len on 06/02/2017.
 */
import exists from './exists';

export default function truthy(x) {
  return (x !== false) && exists(x);
};
