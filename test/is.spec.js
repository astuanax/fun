/**
 * Created by dierickx.len on 26/03/2017.
 */

import chai from 'chai'
import is from '../src/util/is'

describe('is', function () {
  it('0 is a Number', function () {
    const test = is('Number', 0)

    chai.expect(test).to.be.true
  })
  it('"0" is not a Number', function () {
    const test = is('Number', '0')

    chai.expect(test).to.be.false
  })
  it('new Object() is an Object', function () {
    const test = is('Object', new Object())

    chai.expect(test).to.be.true
  })
  it('[] is not an Object', function () {
    const test = is('Object', [])

    chai.expect(test).to.be.false
  })
  it('new Array() is an Array', function () {
    const test = is('Array', [])

    chai.expect(test).to.be.true
  })
  it('[]["field"] is an Array (associative)', function () {
    const notArr = []

    notArr['field'] = true
    const test = is('Array', notArr)

    chai.expect(test).to.be.true
  })
  it('new Object() is not an Array', function () {
    const test = is('Array', new Object())

    chai.expect(test).to.be.false
  })

  it('"a string" is a String', function () {
    const test = is('String', 'a string')

    chai.expect(test).to.be.true
  })
  it('0 is not a String', function () {
    const test = is('String', 0)

    chai.expect(test).to.be.false
  })
  it('NaN is not a String', function () {
    const test = is('String', NaN)

    chai.expect(test).to.be.false
  })
  it('null is not a String', function () {
    const test = is('String', null)

    chai.expect(test).to.be.false
  })
  it('undefined is not a String', function () {
    const test = is('String', undefined)

    chai.expect(test).to.be.false
  })
  it('new Date() is a Date', function () {
    const test = is('Date', new Date())

    chai.expect(test).to.be.true
  })
  it('new Date("invalid") is a Date, though invalid', function () {
    const test = is('Date', new Date('invalid'))

    chai.expect(test).to.be.true
  })
  it('19121976 is not a Date', function () {
    const test = is('Date', 19121976)

    chai.expect(test).to.be.false
  })

  it('()=>{} is a Function', function () {
    const test = is('Function', () => {})

    chai.expect(test).to.be.true
  })

  it('function(){} is a Function', function () {
    const test = is('Function', function () {})

    chai.expect(test).to.be.true
  })

  it('new function(){} is not a Function !!!', function () {
    const test = is('Function', new function () {}())

    chai.expect(test).to.be.false
  })
  it('new Function((x)=>x)) is a Function !!', function () {
    const fun = (x) => x
    const test = is('Function', new Function(fun))

    chai.expect(test).to.be.true
  })
  it('new Object() is not a Function', function () {
    const test = is('Function', new Object())

    chai.expect(test).to.be.false
  })

  it('true is a Boolean', function () {
    const test = is('Boolean', true)

    chai.expect(test).to.be.true
  })
  it('0 is not Boolean', function () {
    const test = is('Boolean', 0)

    chai.expect(test).to.be.false
  })
  it('!!0 is a Boolean', function () {
    const test = is('Boolean', !!0)

    chai.expect(test).to.be.true
  })
  it('[] is not a Boolean', function () {
    const test = is('Boolean', [])

    chai.expect(test).to.be.false
  })

  it('null is a Null object', function () {
    const test = is('Null', null)

    chai.expect(test).to.be.true
  })
  it('undefined  is not  a Null object', function () {
    const test = is('Null', undefined)

    chai.expect(test).to.be.false
  })

  it('undefined  is a Undefined', function () {
    const test = is('Undefined', undefined)

    chai.expect(test).to.be.true
  })
  it('null is not a Undefined', function () {
    const test = is('Undefined', null)

    chai.expect(test).to.be.false
  })

  it('/(.*)/ is a RegExp', function () {
    const test = is('RegExp', /(.*)/)

    chai.expect(test).to.be.true
  })
})
