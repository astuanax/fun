/**

 */

import chai from 'chai'
import anyPass from '../src/anyPass'

describe('anyPass', function () {
  const odd = function (n) { return n % 2 !== 0 }
  const gt20 = function (n) { return n > 20 }
  const lt5 = function (n) { return n < 5 }

  it('reports whether any predicates are satisfied by a given value', function () {
    const ok = anyPass([odd, gt20, lt5])
    chai.expect(ok(7)).to.be.true
    chai.expect(ok(9)).to.be.true
    chai.expect(ok(10)).to.be.false
    chai.expect(ok(18)).to.be.false
    chai.expect(ok(3)).to.be.true
    chai.expect(ok(22)).to.be.true
  })

  it('returns false for an empty predicate list', function () {
    chai.expect(anyPass([])(3)).to.be.false
  })

  it('', () => {
    const rules = [x => typeof x === 'string', x => x > 10]
    chai.expect(anyPass(rules, 11)).to.be.true
    chai.expect(anyPass(rules, undefined)).to.be.false
  })

  const obj = {
    a: 1,
    b: 2
  }

  it('when returns true', () => {
    const conditionArr = [val => val.a === 1, val => val.a === 2]
    chai.expect(anyPass(conditionArr, obj)).to.be.true
  })

  it('when returns false + curry', () => {
    const conditionArr = [val => val.a === 2, val => val.b === 3]
    chai.expect(anyPass(conditionArr)(obj)).to.be.false
  })

  it('checks if any array items conforms to cb', () => {
    const gt5Lt10 = anyPass([i => i === 10, i => i === 5])
    chai.expect(gt5Lt10(5)).to.be.true
    chai.expect(gt5Lt10(10)).to.be.true
    chai.expect(gt5Lt10(200)).to.be.false
  })
})
