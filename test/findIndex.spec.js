/**
 * Created by dierickx.len on 14/02/2017.
 */
import chai from 'chai'
import { findIndex } from '../lib/fun'

describe('findIndex', function () {
  var obj1 = { x: 100 }
  var obj2 = { x: 200 }
  var a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0]
  var even = function (x) {
    return x % 2 === 0
  }
  var gt100 = function (x) {
    return x > 100
  }
  var isStr = function (x) {
    return typeof x === 'string'
  }
  var xGt100 = function (o) {
    return o && o.x > 100
  }

  it('returns the index of the first element that satisfies the predicate', function () {
    chai.expect(findIndex(even, a)).to.equal(1)
    chai.expect(findIndex(gt100, a)).to.equal(8)
    chai.expect(findIndex(isStr, a)).to.equal(3)
    chai.expect(findIndex(xGt100, a)).to.equal(10)
  })

  it('returns the index of the first element that satisfies the predicate', function () {
    chai.expect(findIndex(even, a)).to.equal(1)
    chai.expect(findIndex(gt100, a)).to.equal(8)
    chai.expect(findIndex(isStr, a)).to.equal(3)
    chai.expect(findIndex(xGt100, a)).to.equal(10)
  })

  it('returns the first item index from list that matches the predicate', () => {
    chai.expect(findIndex(even, [1, 3, 6, 10, 13])).to.equal(2)
    chai.expect(findIndex(even)([1, 3, 6, 10, 13])).to.equal(2)
  })

  it('returns -1 if no element matched predicate', () => {
    chai.expect(findIndex(even, [1, 3, 13])).to.equal(-1)
    chai.expect(findIndex(even)([1, 3, 13])).to.equal(-1)
  })
})
