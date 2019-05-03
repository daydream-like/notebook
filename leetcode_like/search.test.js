const expect = require('chai').expect;
const { binSearch } = require('./search');


describe('查找算法测试', function () {
    it('二分查找测试', function () {
        expect(binSearch([1, 2, 3, 4, 5], 1)).to.deep.equal(0)
        expect(binSearch([1, 2, 3, 4, 5], 0)).to.deep.equal(-1)
    })
})