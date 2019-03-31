import chai from 'chai'
import { call } from '../lib/fun'

describe('call', function () {
  it('calls function with all passed args', () => {
    const func1 = (a) => a * 2
    const func2 = (a, b, c) => a + b + c

    chai.expect(call(func1, 2)).to.equal(4)
    chai.expect(call(func2, 1, 2, 3)).to.equal(6)
  })

  it('returns the result of calling its first argument with the remaining arguments', function () {
    chai.expect(call(Math.max, 1, 2, 3, -99, 42, 6, 7)).to.equal(42)
  })

  it('accepts one or more arguments', function () {
    var fn = function () {
      return arguments.length
    }
    chai.expect(call(fn)).to.equal(0)
    chai.expect(call(fn, 'x')).to.equal(1)
    chai.expect(call(fn, 'x', 'y')).to.equal(2)
    chai.expect(call(fn, 'x', 'y', 'z')).to.equal(3)
  })
})
