/**
 * Created by dierickx.l on 06/02/2017.
 */
import existy from 'util/exists'
const truthy = (x) => {
    return (x !== false) && existy(x)
};
export default truthy

