import chai from 'chai'
import prop from '../src/object/prop'

describe('prop', function () {
  const fred = { name: 'Fred', age: 23 }

  it('returns a function that fetches the appropriate property', function () {
    const nm = prop('name')
    chai.expect(typeof nm).to.equal('function')
    chai.expect(nm(fred)).to.equal('Fred')
  })
})
