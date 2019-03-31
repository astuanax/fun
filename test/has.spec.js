/**

 */

import chai from 'chai'
import { has } from '../lib/fun'

describe('has', function () {
  it('checks if the object has a property', function () {
    const a = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 }
    const Person = function () {}
    Person.prototype.age = function () {}
    const bob = new Person()

    chai.expect(has('a', a)).to.equal(true)
    chai.expect(has('a')(a)).to.equal(true)
    chai.expect(has('toString')(a)).to.equal(false)
    chai.expect(has('age', bob)).to.equal(false)
  })
})
