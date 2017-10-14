/**
 * Created by dierickx.len on 2017-04-02
 */

import chai from 'chai'
import isArray from '../src/array/is'

describe("Array", function() {
  beforeEach(function() {});
  afterEach(function() {});
  it('new Array() is an Array', function() {
    const test = isArray([])
    chai.expect(test).to.be.true
  });
});
