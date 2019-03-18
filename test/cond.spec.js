import chai from 'chai'
import cond from '../src/cond'
import always from '../src/always'
import equals from '../src/equals'
import T from '../src/boolean/T'

describe('cond', function () {
  it('returns a function', function () {
    chai.expect(typeof cond([])).to.equal('function')
  })

  it('returns a conditional function', function () {
    var fn = cond([
      [equals(0), always('water freezes at 0°C')],
      [equals(100), always('water boils at 100°C')],
      [T, function (temp) { return 'nothing special happens at ' + temp + '°C' }]
    ])
    chai.expect(fn(0)).to.equal('water freezes at 0°C')
    chai.expect(fn(50)).to.equal('nothing special happens at 50°C')
    chai.expect(fn(100)).to.equal('water boils at 100°C')
  })

  it('returns a function which returns undefined if none of the predicates matches', function () {
    var fn = cond([
      [equals('foo'), always(1)],
      [equals('bar'), always(2)]
    ])
    chai.expect(fn('quux')).to.equal(undefined)
  })

  it('predicates are tested in order', function () {
    var fn = cond([
      [T, always('foo')],
      [T, always('bar')],
      [T, always('baz')]
    ])
    chai.expect(fn()).to.equal('foo')
  })

  it('returns value from callback for matched condition', () => {
    const val = cond([
      [value => value === 3, () => 3],
      [value => value > 1, () => 2],
      [() => true, () => 1]
    ])
    chai.expect(val(1)).to.equal(1)
    chai.expect(val(2)).to.equal(2)
    chai.expect(val(3)).to.equal(3)
  })

  it('returns undefined when no one condition is true', () => {
    const val = cond([[i => i === 3, () => 3]])
    chai.expect(val(4)).to.equal(undefined)
  })

  it('returns undefined when no conditions passes', () => {
    const val = cond([])
    chai.expect(val(4)).to.equal(undefined)
  })
})
