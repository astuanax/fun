import chai from 'chai'
import apply from '../src/util/apply'

describe('apply', function () {
  it('applies function to argument list', function () {
    chai.expect(apply(Math.max, [1, 2, 3, -99, 42, 6, 7])).to.equal(42)
  })

  it('provides no way to specify context', function () {
    const obj = { method: function () { return this === obj } }
    chai.expect(apply(obj.method, [])).to.be.false
  })

  it('applies array of arguments to cb', () => {
    var a = apply(function () {
      return [].slice.call(arguments).map(x => x * 2)
    })
    chai.expect(a([1, 2, 3])).to.deep.equal([2, 4, 6])
  })
})
