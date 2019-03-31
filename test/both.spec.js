/**
 * Created by dierickx.len on 2019-02-25
 */

import chai from 'chai'
import { both } from '../lib/fun'
import { Maybe } from '../lib/fun'

describe('both', function () {
  it('confirms that both of functions returns true', () => {
    const isGt5Lt10 = both(i => i > 5 && i > 0, i => i < 10)
    chai.expect(isGt5Lt10(7)).to.be.true
    chai.expect(isGt5Lt10(3)).to.be.false
    chai.expect(isGt5Lt10(12)).to.be.false
    chai.expect(isGt5Lt10(-2)).to.be.false
  })

  it('confirms that both of monads returns true', () => {
    chai.expect(both(Maybe.of(true), Maybe.of(true))).to.deep.equal(Maybe.of(true))
  })
})
