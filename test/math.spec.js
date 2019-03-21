var assert = require('assert');
var calc = require("../Math");
var expect = require('chai').expect;


describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});



it('should return true if addition is equal 8', function(){


    var isValid = calc.add(5,3);
    expect(isValid).to.equal(8);

    var isValid = calc.add('a',3);
    expect(isValid).to.be.null;

});

