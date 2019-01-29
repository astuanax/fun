/**
 * Created by dierickx.len on 26/03/2017.
 */
import curry from '../util/curry';

export default curry((start, end) => {
  return (new Date(start).getTime() - new Date(end).getTime());
});
