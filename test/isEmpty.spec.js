/**

 */

import chai from 'chai'
import { isEmpty } from '../lib/fun'

describe('isEmpty', function () {
  it('Empty object', function () {
    const test = isEmpty({})
    chai.expect(test).to.be.true
  })
  it('Empty array', function () {
    const test = isEmpty([])

    chai.expect(test).to.be.true
  })

  it('Empty string', function () {
    const test = isEmpty('')

    chai.expect(test).to.be.true
  })

  it('null should return false', function () {
    const test = isEmpty(null)

    chai.expect(test).to.be.false
  })
  it('undefined should return false', function () {
    const test = isEmpty(undefined)

    chai.expect(test).to.be.false
  })
})
