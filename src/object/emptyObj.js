/**
 * Created by dierickx.l on 18/03/2017.
 */
export default (x) => {
    for(let prop in x) {
        if (x.hasOwnProperty(prop))
            return false
    }
    return true
}