/**

 */

import chai from 'chai'
import { pick } from '../lib/fun'

describe('pick', function () {
  it('returns object with picked properties', () => {
    chai.expect(pick(['a', 'b'], { a: 1, b: 2, c: 3 })).to.deep.equal({ a: 1, b: 2 })
  })

  it('ignores missed properties', () => {
    const obj = pick(['a', 'b'], { a: 1, c: 3 })
    chai.expect(Object.keys(obj).length).to.equal(1)
  })

  it('picks even falsy properties', () => {
    const obj = { a: false, b: 0, c: undefined, d: null, e: '' }

    chai.expect(pick(Object.keys(obj), obj)).to.deep.equal(obj)
  })

  var obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, 1: 7 }

  it('copies the named properties of an object to the new object', function () {
    chai.expect(pick(['a', 'c', 'f'], obj)).to.deep.equal({ a: 1, c: 3, f: 6 })
  })

  it('handles numbers as properties', function () {
    chai.expect(pick([1], obj)).to.deep.equal({ 1: 7 })
  })

  it('ignores properties not included', function () {
    chai.expect(pick(['a', 'c', 'g'], obj)).to.deep.equal({ a: 1, c: 3 })
  })

  it('retrieves prototype properties', function () {
    var F = function (param) {
      this.x = param
    }
    F.prototype.y = 40
    F.prototype.z = 50
    var obj = new F(30)
    obj.v = 10
    obj.w = 20
    chai.expect(pick(['w', 'x', 'y'], obj)).to.deep.equal({ w: 20, x: 30, y: 40 })
  })
})
