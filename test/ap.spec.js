/**

 */

import chai from 'chai'
import ap from '../src/util/ap'
import add from '../src/number/add'

describe('ap', function () {
  function mult2 (x) { return x * 2 }
  function plus3 (x) { return x + 3 }

  it('interprets [a] as an applicative', function () {
    chai.expect(ap([mult2, plus3], [1, 2, 3])).to.deep.equal([2, 4, 6, 4, 5, 6])
  })

  it('interprets ((->) r) as an applicative', function () {
    var f = function (r) {
      return function (a) {
        return r + a
      }
    }
    var g = function (r) { return r * 2 }
    var h = ap(f, g)
    // (<*>) :: (r -> a -> b) -> (r -> a) -> (r -> b)
    // f <*> g = \x -> f x (g x)
    chai.expect(h(10)).to.equal(10 + (10 * 2))
    chai.expect(ap(add)(g)(10)).to.equal(10 + (10 * 2))
  })

  it('dispatches to the passed object\'s ap method when values is a non-Array object', function () {
    var obj = { ap: function (n) { return 'called ap with ' + n } }
    chai.expect(ap(obj, 10)).to.equal(obj.ap(10))
  })

  it('applies a list of functions to a list of values', () => {
    const val = ap([i => i * 2, i => i + 3], [1, 2, 3])
    chai.expect(val).to.deep.equal([2, 4, 6, 4, 5, 6])
  })

  it('works with any iterable', () => {
    const val = ap([i => 'letter ' + i, i => i.toUpperCase()], 'abc')
    chai.expect(val).to.deep.equal(['letter a', 'letter b', 'letter c', 'A', 'B', 'C'])
  })
})
