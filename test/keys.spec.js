/**

 */

import chai from 'chai'
import keys from '../src/object/keys'

describe('keys', function () {
  it('returns the keys of all own properties of an object as an array', function () {
    const a = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 }
    const Person = function () {}
    Person.prototype.age = function () {}
    const bob = new Person()

    chai.expect(keys(a)).to.deep.equal(['a', 'b', 'c', 'd'])
    chai.expect(keys(bob)).to.deep.equal([])
  })
})
