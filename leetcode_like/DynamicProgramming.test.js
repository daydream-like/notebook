const expect = require('chai').expect
const {LCS} = require('./DynamicProgramming');


describe('最长公共子序列测试',function(){
    it('最长公共子序列',function(){
        expect(LCS('abcd','av')).to.deep.equal('a');
        expect(LCS('abcd','abv')).to.deep.equal('ab');
        expect(LCS('abcd','')).to.deep.equal('');
        expect(LCS('','aaa')).to.deep.equal('');
        expect(LCS('','')).to.deep.equal('');
    })
})