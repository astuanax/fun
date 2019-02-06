/**
 * @author Len Dierickx
 */

import chai from 'chai'
import hasIn from '../src/util/hasIn'

describe('hasIn', function () {
  it('checks if the object has an own or inherited property', function () {
    const a = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 }
    const Person = function () {}
    Person.prototype.age = function () {}
    const bob = new Person()

    chai.expect(hasIn('a', a)).to.equal(true)
    chai.expect(hasIn('a')(a)).to.equal(true)
    chai.expect(hasIn('toString')(a)).to.equal(true)
    chai.expect(hasIn('age', bob)).to.equal(true)
  })
})
