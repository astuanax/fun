/**
 * Created by dierickx.len on 2019-04-02
 */

import chai from 'chai'
import { binary } from '../lib/fun'

describe('binary', function () {
  it('creates binary function from passed one', () => {
    chai.expect(binary((a, b, c = 0) => a + b + c)(1, 2, 3)).to.equal(3)
  })
  it('turns multiple-argument function into binary one', function () {
    binary(function (x, y, z) {
      chai.expect(arguments.length).to.equal(2)
      chai.expect(typeof z).to.equal('undefined')
    })(10, 20, 30)
  })

  it('initial arguments are passed through normally', function () {
    binary(function (x, y, z) {
      chai.expect(x).to.equal(10)
      chai.expect(y).to.equal(20)
      void z
    })(10, 20, 30)
  })
})
