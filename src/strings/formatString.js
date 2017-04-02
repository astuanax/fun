/**
 * Created by dierickx.l on 26/03/2017.
 */
import toArray from '../array/to'
import not from '../util/not'
import is from '../is'

export default function (str) { //use function(), arrow function doesn't bind arguments
    let args = toArray(arguments)
    args.shift()
    return str.replace(/{(\d+)}/g, (match, idx) => {
        return not(is('Undefined', args[idx])) ? args[idx] : match
    })
}