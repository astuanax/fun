/**

 */

import chai from 'chai'
import { keysIn } from '../lib/fun'

describe('keysIn', function () {
  it('returns the keys of an object as an array', function () {
    const a = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 }
    const Person = function () {}
    Person.prototype.age = function () {}
    const bob = new Person()

    chai.expect(keysIn(a)).to.deep.equal(['a', 'b', 'c', 'd'])
    chai.expect(keysIn(bob)).to.deep.equal(['age'])
  })
})
