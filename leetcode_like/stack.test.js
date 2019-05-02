let isPalindrome = require('./stack.js');
let expect = require('chai').expect;
const assert = require('assert');

describe('stack  test', function () {
    it('isPalindrome', function () {
        expect(isPalindrome('dad')).to.deep.equal(true)
        expect(isPalindrome('like')).to.deep.equal(false)
    })
})