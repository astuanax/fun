/**

 */

import chai from 'chai'
import map from '../src/map'
import identity from '../src/identity'
const identityMap = map(identity)

describe('map', function () {
  it('maps over a object', function () {
    const a = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 }
    const b = {}
    b.test = 'test'
    b.result = 'result'

    chai.expect(identityMap(a)).to.deep.equal(a)
    chai.expect(identityMap(b)).to.deep.equal(b)
  })

  it('maps over an array', function () {
    const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const b = []
    b.push('test')
    b.push('result')

    chai.expect(identityMap(a)).to.deep.equal(a)
    chai.expect(identityMap(b)).to.deep.equal(b)
  })

  it('maps over a string', function () {
    const a = "qwertzuzi1415920't92un,."
    chai.expect(identityMap(a)).to.deep.equal(a)
    chai.expect(identityMap(a)).to.equal(a)
  })

  it('maps over a Map', function () {
    const a = new Map()
    a.set('a', 0)
    a.set('b', 1)
    a.set('c', 2)
    const b = new Map()
    const c = new Map()
    c.set(NaN, 'not a number')

    chai.expect(identityMap(a)).to.deep.equal(a)
    chai.expect(identityMap(b)).to.deep.equal(b)
    chai.expect(identityMap(c)).to.deep.equal(c)
  })
})
