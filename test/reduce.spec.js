import chai from 'chai'
import {reduce, add, concat, multiply, max, min } from '../lib/fun'

describe('reduce', function () {
  it('reduces an array', function () {
    const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const b = ['first']
    b.push('test')
    b.push('result')
    b.push('last')

    chai.expect(reduce(add)(a)).to.equal(45)
    chai.expect(reduce(multiply)(a)).to.equal(0)
    chai.expect(reduce(max)(a)).to.equal(9)
    chai.expect(reduce(min)(a)).to.equal(0)
    chai.expect(reduce(concat)(b)).to.equal('firsttestresultlast')
  })

})
