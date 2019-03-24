/**
 * Created by dierickx.len on 26/03/2017.
 */
import chai from 'chai'
import { formatString } from '../lib/fun'

describe('strings', function () {
  beforeEach(function () {
  })
  afterEach(function () {
  })

  it('Formats a string', function () {
    const test = formatString('minutes: {0}', '1')

    chai.expect(test).to.equal('minutes: 1')
  })
})
