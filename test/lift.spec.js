/**

 */

import chai from 'chai'
import { curry, lift, add, Maybe, Either } from '../lib/fun'

describe('lift', function () {
  const add3 = curry(function add3 (a, b, c) {
    return a + b + c
  })
  const add4 = curry(function add4 (a, b, c, d) {
    return a + b + c + d
  })
  const add5 = curry(function add5 (a, b, c, d, e) {
    return a + b + c + d + e
  })
  const madd3 = lift(add3)
  const madd4 = lift(add4)
  const madd5 = lift(add5)

  it('returns the cartesian of arrays', function () {
    const addArrays = lift((a, b, c) => +a + +b + +c)
    chai.expect(addArrays([1, 2, 3], [1, 2, 3], [1])).to.deep.equal([3, 4, 5, 4, 5, 6, 5, 6, 7])
  })

  it('returns a function if called with just a function', function () {
    chai.expect(typeof lift(add), 'function')
  })

  it('produces a cross-product of array values', function () {
    chai.expect(madd3([1, 2, 3], [1, 2], [1, 2, 3])).to.deep.equal([3, 4, 5, 4, 5, 6, 4, 5, 6, 5, 6, 7, 5, 6, 7, 6, 7, 8])
    chai.expect(madd3([1], [2], [3])).to.deep.equal([6])
    chai.expect(madd3([1, 2], [3, 4], [5, 6])).to.deep.equal([9, 10, 10, 11, 10, 11, 11, 12])
  })

  it('can lift functions of any arity', function () {
    chai.expect(madd3([1, 10], [2], [3])).to.deep.equal([6, 15])
    chai.expect(madd4([1, 10], [2], [3], [40])).to.deep.equal([46, 55])
    chai.expect(madd5([1, 10], [2], [3], [40], [500, 1000])).to.deep.equal([546, 1046, 555, 1055])
  })

  it('works with other functors such as "Either"', function () {
    const addM = lift(add)
    chai.expect(addM(Either.of(3), Either.of(5)), Either.of(8))
  })
})
