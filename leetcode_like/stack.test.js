let { isPalindrome, fact } = require('./stack.js');
let expect = require('chai').expect;
const assert = require('assert');

describe('stack  test', function () {
    it('isPalindrome', function () {
        expect(isPalindrome('dad')).to.deep.equal(true)
        expect(isPalindrome('like')).to.deep.equal(false)
    })
    it('递归5*4*3*2*1 = 120', function () {
        expect(fact(5)).equal(120);
    })
})