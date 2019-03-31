import chai from 'chai'
import {flatMap, append, first} from '../lib/fun'

describe('flatMap', function () {
  it("double the values in an array", function () {
    chai.expect(flatMap(x => [x, x], [1, 2, 3, 4])).to.deep.equal([1, 1, 2, 2, 3, 3, 4, 4])
  })
  function add1 (x) {
    return [x + 1]
  }

  function dec (x) {
    return [x - 1]
  }

  function times2 (x) {
    return [x * 2]
  }

  it('maps a function over a nested list and returns the (shallow) flattened result', function () {
    chai.expect(flatMap(times2, [1, 2, 3, 1, 0, 10, -3, 5, 7])).to.deep.equal([2, 4, 6, 2, 0, 20, -6, 10, 14])
    chai.expect(flatMap(times2, [1, 2, 3])).to.deep.equal([2, 4, 6])
  })

  it('does not flatten recursively', function () {
    function f (xs) {
      return xs[0] ? [xs[0]] : []
    }

    chai.expect(flatMap(f, [[1], [[2], 100], [], [3, [4]]])).to.deep.equal([1, [2], 3])
  })

  it('interprets ((->) r) as a monad', function () {
    var h = function (r) {
      return r * 2
    }
    var f = function (a) {
      return function (r) {
        return r + a
      }
    }
    var bound = flatMap(f, h)
    // (>>=) :: (r -> a) -> (a -> r -> b) -> (r -> b)
    // h >>= f = \w -> f (h w) w
    chai.expect(bound(10)).to.deep.equal((10 * 2) + 10)

    chai.expect(flatMap(append, first)([1, 2, 3])).to.deep.equal([1, 2, 3, 1])
  })

  it('dispatches to objects that implement `flatMap`', function () {
    var obj = {
      x: 100,
      flatMap: function (f) {
        return f(this.x)
      }
    }
    chai.expect(flatMap(add1, obj)).to.deep.equal([101])
  })

  it('composes', function () {
    var mdouble = flatMap(times2)
    var mdec = flatMap(dec)
    chai.expect(mdec(mdouble([10, 20, 30]))).to.deep.equal([19, 39, 59])
  })

  // it('can compose transducer-style', function () {
  //   var mdouble = flatMap(times2)
  //   var mdec = flatMap(dec)
  //   var xcomp = compose(mdec, mdouble)
  //   chai.expect(intoArray(xcomp, [10, 20, 30]), [18, 38, 58])
  // })
})
