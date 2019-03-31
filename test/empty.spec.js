/**

 */

import chai from 'chai'
import { empty } from '../lib/fun'

describe('empty', function () {
  it('returns an empty array', function () {
    chai.expect(empty([])).to.deep.equal(new Array())
    chai.expect(empty([0, 1, 2, 3])).to.deep.equal(new Array())
  })

  it('returns an empty object', function () {
    chai.expect(empty({})).to.deep.equal(new Object())
    chai.expect(empty({ 0: 'a', 'b': 1 })).to.deep.equal(new Object())
  })

  it('returns an empty string', function () {
    chai.expect(empty('')).to.deep.equal(new String())
    chai.expect(empty('alvnaékvnaénvaév')).to.deep.equal(new String())
  })

  it('returns an empty Map', function () {
    const m = new Map()
    m.set('key', 0)
    chai.expect(empty(m)).to.deep.equal(new Map())
    chai.expect(empty(new Map())).to.deep.equal(new Map())
  })

  it('returns an empty Set', function () {
    const s = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    chai.expect(empty(s)).to.deep.equal(new Set())
    chai.expect(empty(new Set())).to.deep.equal(new Set())
  })

  // TODO Does this make any sense??
  // it('returns an empty number', function () {
  //   chai.expect(empty(10)).to.equal(+new Number())
  // })
})
