import chai from 'chai'
import {Maybe} from '../lib/fun'

describe('Maybe', function () {
  it('follows Monad laws left identity', () => {
    const v = 2
    const maybeVal = Maybe.of(v)
    const mapper = x => Maybe.of(x * 2)
    chai.expect(maybeVal.map(mapper)).to.deep.equal(mapper(v))
  })

  it('follows Monad laws right identity', () => {
    const maybeVal = Maybe.of(4)
    const mapper = x => Maybe.of(x)
    chai.expect(maybeVal.map(mapper)).to.deep.equal(maybeVal)
  })

  it('follows Monad laws associativity', () => {
    const f = val => Maybe.of(val + 1)
    const g = val => Maybe.of(val * 2)
    const m = Maybe.of(1)

    const lhs = m.map(f).map(g)
    const rhs = m.map(x => f(x).map(g))

    chai.expect(lhs).to.deep.equal(rhs)
  })

  it('flatMaps where necessary', () => {
    const f = val => Maybe.of(val + 1)
    const g = val => Maybe.of(val * 2)
    const m = Maybe.of(1)

    const lhs = m.flatMap(f).flatMap(g)
    const rhs = m.flatMap(x => f(x).flatMap(g))

    chai.expect(lhs).to.deep.equal(rhs)
  })

  it('Applies a function to a value', () => {
    const m = Maybe.of(x => 2 * x)
    chai.expect(m.ap(4).getOrElse(false)).to.equal(8)
  })

  it('return a value with getOrElse', () => {
    const str = String('Something went wrong')
    const f = x => undefined
    const m = Maybe.of([0, 1, 2]).map(f).getOrElse(str)
    chai.expect(m).to.equal(str)
  })
})
