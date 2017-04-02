/**
 * Created by dierickx.l on 25/03/2017.
 */
export const curry = function (fun) {
    let argslen = fun.length
    return createRecurser([])

    function createRecurser (acc) {
        return function () {
            let args = Array.prototype.slice.call(arguments)
            return recurse(acc, args)
        }
    }

    function recurse (acc, args) {
        let _acc = acc.concat(args)
        if (_acc.length < argslen) {
            return createRecurser(_acc)
        }
        else {
            return fun.apply(this, _acc)
        }
    }
}
export default curry