/**
 * @author Len Dierickx
 */

import chai from 'chai'
import defaultTo from '../src/util/defaultTo'

describe('defaultTo', function () {
  it('return default value (first argument), if value (second argument) is null, undefined or NaN', () => {
    const defaultTo42 = defaultTo(42)

    chai.expect(defaultTo42(null)).to.equal(42)
    chai.expect(defaultTo42(undefined)).to.equal(42)
    chai.expect(defaultTo42(NaN)).to.equal(42)
    chai.expect(defaultTo42(43)).to.equal(43)
    chai.expect(defaultTo42(false)).to.be.false
  })
})
