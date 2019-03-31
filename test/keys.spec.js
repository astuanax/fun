/**

 */

import chai from 'chai'
import { keys } from '../lib/fun'
import { map } from '../lib/fun'

describe('keys', function () {
  it('returns the keys of all own properties of an object as an array', function () {
    const a = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 }
    const Person = function () {
    }
    Person.prototype.age = function () {
    }
    const bob = new Person()

    chai.expect(keys(a)).to.deep.equal(['a', 'b', 'c', 'd'])
    chai.expect(keys(bob)).to.deep.equal([])
  })
})

describe('keys', function () {
  var obj = { a: 100, b: [1, 2, 3], c: { x: 200, y: 300 }, d: 'D', e: null, f: undefined }

  function C () {
    this.a = 100
    this.b = 200
  }

  C.prototype.x = function () {
    return 'x'
  }
  C.prototype.y = 'y'
  var cobj = new C()

  it("returns an array of the given object's own keys", function () {
    chai.expect(keys(obj).sort()).to.deep.equal(['a', 'b', 'c', 'd', 'e', 'f'])
  })

  it('works with hasOwnProperty override', function () {
    chai.expect(keys({
      hasOwnProperty: false
    })).to.deep.equal(['hasOwnProperty'])
  })

  it("does not include the given object's prototype properties", function () {
    chai.expect(keys(cobj).sort()).to.deep.equal(['a', 'b'])
  })
})
