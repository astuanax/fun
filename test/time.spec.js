/**
 * Created by dierickx.len on 26/03/2017.
 */

import chai from 'chai'
import compose from '../src/compose'
import timeToHour from '../src/date/toHour'
import timeToDay from '../src/date/toDay'
import timeToMinutes from '../src/date/toMinutes'
import timeToSeconds from '../src/date/toSeconds'
import diffDate from '../src/date/diffDate'

describe('time', function () {
  beforeEach(function () {
  })
  afterEach(function () {
  })
  it('1000 is second', function () {
    const test = timeToSeconds(1000)

    chai.expect(test).to.equal(1)
  })
  it('60000 is minute', function () {
    const test = timeToMinutes(60000)

    chai.expect(test).to.equal(1)
  })

  it('3600000 is an hour', function () {
    const test = timeToHour(3600000)

    chai.expect(test).to.equal(1)
  })
  it('343600000 is day', function () {
    const test = timeToDay(24 * 3600000)

    chai.expect(test).to.equal(1)
  })

  it('Diff is 24 hours', function () {
    const day = 24 * 3600000
    const now = new Date()
    const yesterday = new Date()

    yesterday.setUTCDate(yesterday.getUTCDate() - 1)
    const test = diffDate(now, yesterday)

    chai.expect(test).to.be.at.least(day)
  })

  it('Diff is 1 hour', function () {
    const hour = 3600000
    const start = new Date()
    const target = new Date()

    target.setUTCHours(target.getUTCHours() + 1)
    const test = Math.abs(diffDate(start, target))

    chai.expect(test).to.equal(hour)
  })

  it('Diff is 1 a minute', function () {
    const minute = 60000
    const start = new Date()
    const target = new Date()

    target.setUTCMinutes(target.getUTCMinutes() + 1)
    const test = Math.abs(diffDate(start, target))

    chai.expect(test).to.equal(minute)
  })

  it('Diff is 1 a second', function () {
    const sec = 1000
    const start = new Date()
    const target = new Date()

    target.setUTCSeconds(target.getUTCSeconds() + 1)
    const test = Math.abs(diffDate(start, target))

    chai.expect(test).to.equal(sec)
  })

  it('Diff is about a minute', function () {
    const start = new Date()
    const target = new Date()

    target.setUTCMinutes(target.getUTCMinutes() + 1)
    target.setUTCSeconds(target.getUTCSeconds() + 20)

    const test = compose(Math.floor, Math.abs, timeToMinutes, diffDate)

    chai.expect(test(start, target)).to.equal(1)
  })
})
