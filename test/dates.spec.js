/**
 * Created by dierickx.l on 27/03/2017.
 */

import chai from 'chai'
import isFutureDate from '../src/dates/isFutureDate'


describe("Dates", function() {
    beforeEach(function() {});
    afterEach(function() { });

    it('Tomorrows dates is future date', function() {
        let tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        const test = isFutureDate(tomorrow)
        chai.expect(test).to.be.true
    });
});