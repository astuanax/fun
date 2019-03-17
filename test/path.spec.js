import chai from 'chai'
import path from '../src/object/path'

describe('paths', function () {
  var obj = {
    a: {
      b: {
        c: 1,
        d: 2
      }
    },
    p: [{ q: 3 }, 'Hi'],
    x: {
      y: 'Alice',
      z: [[{}]]
    }
  }
  it('takes paths and returns values at those paths', function () {
    chai.expect(path(['a', 'b', 'c'], obj)).to.deep.equal(1)
    chai.expect(path(['a', 'b', 'd'], obj)).to.deep.equal(2)
    chai.expect(path(['x', 'y'], obj)).to.deep.equal('Alice')
    chai.expect(path(['p', 'q'], obj)).to.deep.equal(undefined)
  })

  it('takes a paths that contains indices into arrays', function () {
    chai.expect(path(['p', 0, 'q'], obj)).to.deep.equal(3)
    chai.expect(path(['p', 0, 'q'], obj)).to.deep.equal(3)
    chai.expect(path(['x', 'z', 0, 0], obj)).to.deep.equal({})
    chai.expect(path(['x', 'z', 2, 1], obj)).to.deep.equal(undefined)
  })

  it('takes a path that contains negative indices into arrays', function () {
    chai.expect(path(['p', -2, 'q'], obj)).to.deep.equal(3)
    chai.expect(path(['p', -4, 'q'], obj)).to.deep.equal(undefined)
    chai.expect(path(['p', -1], obj)).to.deep.equal('Hi')
    chai.expect(path(['x', 'z', -1, 0], obj)).to.deep.equal({})
  })

  it('gets a deep property\'s value from objects', function () {
    chai.expect(path(['a', 'b'], obj)).to.deep.equal(obj.a.b)
    chai.expect(path(['p', 0], obj)).to.deep.equal(obj.p[0])
  })

  it('returns undefined for items not found', function () {
    chai.expect(path(['a', 'x', 'y'], obj)).to.deep.equal(undefined)
    chai.expect(path(['p', 2], obj)).to.deep.equal(undefined)
  })
})
