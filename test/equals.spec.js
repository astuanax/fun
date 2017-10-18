/**
 * @author Len Dierickx
 */

import chai from 'chai'
import equals from '../src/util/equals'
import and from '../src/util/and'

describe("equals", function() {
  beforeEach(function() {});
  afterEach(function() {});
  
  it('numbers', function() {
    chai.expect(equals(0,0)).to.be.true
    chai.expect(equals(1,1)).to.be.true
    chai.expect(equals(-1,-1)).to.be.true
    chai.expect(equals(Number(10),10)).to.be.true
    chai.expect(equals(Number(10),Number(10))).to.be.true
    chai.expect(equals(0x010101,0x010101)).to.be.true
    chai.expect(equals(0b11,0b11)).to.be.true
    chai.expect(equals(0o10,0o10)).to.be.true
    
  });
  it('String equals String', function() {
    const string1 = ''
    const string2 = ''
    const test = equals(string1, string2)
    chai.expect(equals('You can do anything, but not everything.','You can do anything, but not everything.')).to.be.true
    chai.expect(test).to.be.true
  });
  it('Array equals Array', function() {
      const arr1 = [1,2,3]
      const arr2 = [1,2,3]
      const arr3 = [2,3,1]
      const arr4 = [{}, []]
      const arr5 = [{}, []]
      const arr6 = [{}, null]
      const arr7 = [{}, null]      
      const test = equals(arr1, arr2)
      const test2 = equals(arr1, arr3)      
      chai.expect(test).to.be.true
      chai.expect(test2).to.be.false
    });
    
    it('booleans', function() {
        chai.expect(equals(true, true)).to.be.true
        chai.expect(equals(new Boolean(true), new Boolean(true))).to.be.true
        chai.expect(equals(new Boolean(true), true)).to.be.true
        chai.expect(equals(true, false)).to.be.false
        chai.expect(equals(new Boolean(false), new Boolean(true))).to.be.false
        chai.expect(equals(new Boolean(false), true)).to.be.false
      });
    

      it('objects', function() {
          chai.expect(equals({'a': 0, 'b': 1}, {'a': 0, 'b': 1})).to.be.true
          chai.expect(equals({'a': 0, 'b': 3}, {'a': 0, 'b': 1})).to.be.false
          chai.expect(equals(new Object({'a': 0, 'b': 1}), {'a': 0, 'b': 1})).to.be.true
          chai.expect(equals(
            new Object({'a': 0, 'b': { 'c' : 2 }}),
            new Object({'a': 0, 'b': { 'c' : 2 }})
          )).to.be.true
        });
});
