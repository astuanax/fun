import chai from 'chai'
import { bind } from '../lib/fun'

describe('bind', function () {
  it('binds function to context', () => {
    var context = { a: 1 }
    var func = function () { return this.a }
    var bindedFunc = bind(func, context)

    chai.expect(bindedFunc()).to.equal(1)
  })

  function Foo (x) {
    this.x = x
  }
  function add (x) {
    return this.x + x
  }
  function Bar (x, y) {
    this.x = x
    this.y = y
  }
  Bar.prototype = new Foo()
  Bar.prototype.getX = function () {
    return 'prototype getX'
  }

  it('returns a function', function () {
    chai.expect(typeof bind(add, Foo)).to.equal('function')
  })

  it('returns a function bound to the specified context object', function () {
    var f = new Foo(12)
    function isFoo () {
      return this instanceof Foo
    }
    var isFooBound = bind(isFoo, f)
    chai.expect(isFoo()).to.be.false
    chai.expect(isFooBound()).to.be.true
  })

  it('works with built-in types', function () {
    var abc = bind(String.prototype.toLowerCase, 'ABCDEFG')
    chai.expect(typeof abc).to.equal('function')
    chai.expect(abc()).to.equal('abcdefg')
  })

  it('works with user-defined types', function () {
    var f = new Foo(12)
    function getX () {
      return this.x
    }
    var getXFooBound = bind(getX, f)
    chai.expect(getXFooBound()).to.equal(12)
  })

  it('works with plain objects', function () {
    var pojso = {
      x: 100
    }
    function incThis () {
      return this.x + 1
    }
    var incPojso = bind(incThis, pojso)
    chai.expect(typeof incPojso).to.equal('function')
    chai.expect(incPojso()).to.equal(101)
  })

  it('does not interfere with existing object methods', function () {
    var b = new Bar('a', 'b')
    function getX () {
      return this.x
    }
    var getXBarBound = bind(getX, b)
    chai.expect(b.getX()).to.equal('prototype getX')
    chai.expect(getXBarBound()).to.equal('a')
  })

  it('preserves arity', function () {
    var f0 = function () { return 0 }
    var f1 = function (a) { return a }
    var f2 = function (a, b) { return a + b }
    var f3 = function (a, b, c) { return a + b + c }

    chai.expect(bind(f0, {}).length).to.equal(0)
    chai.expect(bind(f1, {}).length).to.equal(1)
    chai.expect(bind(f2, {}).length).to.equal(2)
    chai.expect(bind(f3, {}).length).to.equal(3)
  })
})
