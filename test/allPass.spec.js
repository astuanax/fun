/**

 */

import chai from 'chai'
import allPass from '../src/allPass'

describe('allPass', function () {
  it('checks if all array items conforms to cb', () => {
    const gt5Lt10 = allPass([i => i < 10, i => i > 5])
    chai.expect(gt5Lt10(6)).to.be.true
    chai.expect(gt5Lt10(4)).to.be.false
    chai.expect(gt5Lt10(10)).to.be.false
  })
})
