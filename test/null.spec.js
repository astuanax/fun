/**
 * Created by dierickx.len on 26/03/2017.
 */

import chai from 'chai'
import nill from '../src/util/null'

describe("null", function() {
    beforeEach(function() {});
    afterEach(function() { });
    

    it('null', function() {
        chai.expect(nill(null)).to.be.true
        chai.expect(nill(undefined)).to.be.true
        chai.expect(nill(false)).to.be.false
        chai.expect(nill('str')).to.be.false
        chai.expect(nill({})).to.be.false
        chai.expect(nill([])).to.be.false
    });
});