/**
 * Created by dierickx.len on 18/03/2017.
 */

export const concat = function (separator = ',') { // use function(), arrow function doesn't bind arguments
  let args = Array.prototype.slice.call(arguments, 1);

  return args.join(separator);
};

export default concat;
