import chai from 'chai'
import { Either, compose, filter, map, cond, equals, T } from '../lib/fun'

describe('Either', function () {
  it('creates an Either', function () {
    const e = Either.of([0, 1, 2, 3, 4])
    chai.expect(e.type).to.equal('Right')
    chai.expect(e.isRight()).to.be.true
    chai.expect(e.isLeft()).to.be.false
  })

  it('creates an Either.left', function () {
    const e = Either.Left(new Error('This is an error'))
    chai.expect(e.type).to.equal('Left')
    chai.expect(e.isRight()).to.be.false
    chai.expect(e.isLeft()).to.be.true
  })

  it('maps over an Either', function () {
    const e = Either.of([0, 1, 2, 3, 4])
    chai.expect(e.map(x => x)).to.deep.equal(new Either.Right([0, 1, 2, 3, 4]))
    chai.expect(e.map(x => (x.concat(5)))).to.deep.equal(new Either.Right([0, 1, 2, 3, 4, 5]))

    const l = Either.Left(new Error('This is an error'))
    chai.expect(l.map(x => x)).to.deep.equal(l)
  })

  it('chains an Either', function () {
    const e = Either.of([0, 1, 2, 3, 4])
    chai.expect(e.map(x => x)).to.deep.equal(new Either.Right([0, 1, 2, 3, 4]))
    chai.expect(e.map(x => (x.concat(5)))).to.deep.equal(new Either.Right([0, 1, 2, 3, 4, 5]))

    const l = Either.Left(new Error('This is an error'))
    chai.expect(l.map(x => x)).to.deep.equal(l)
  })

  it('handles catamorphism', function () {
    const EitherParsedData = function (data) {
      try {
        return Either.Right(data[0])
      } catch (e) {
        return Either.Left(new Error(e))
      }
    }

    const EitherRight = EitherParsedData([1, 2])
    const EitherLeft = EitherParsedData(undefined)

    chai.expect(EitherLeft.isLeft()).to.be.true
    chai.expect(EitherRight.isRight()).to.be.true

    const EitherData = x => EitherParsedData(x).cata(x => x.toString(), x => x * 2)
    const ok = EitherData([1, 2])
    const error = EitherData(undefined)

    chai.expect(ok).to.equal(2)
    chai.expect(error).to.equal('Error: TypeError: Cannot read property \'0\' of undefined')
  })

  it('handles catamorphism', function () {
    const EitherBoilOrNot = cond([
      [equals(100), () => Either.Right('Water is boiling, take it off!!')],
      [T, temp => Either.Left('Water is ' + temp + '°C, wiat until it boils')]
    ])

    const tempData = [0, 10, 55, 60, 100]
    const isLeft = filter(x => x.isLeft())
    const isRight = filter(x => x.isRight())
    const mapper = map(EitherBoilOrNot)
    const BoilData = compose(isRight, mapper)(tempData)
    const WaitData = compose(isLeft, mapper)(tempData)

    chai.expect(BoilData.length).to.equal(1)
    chai.expect(WaitData.length).to.equal(4)
  })
})
