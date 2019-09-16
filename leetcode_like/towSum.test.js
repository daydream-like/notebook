const expect = require('chai').expect;
const { twoSum } = require('./twoSum');


describe('twoSum', function () {
    it('twoSum', function () {
        expect(twoSum([1, 2, 3, 4, 5], 3)).to.deep.equal([1, 0]);
    })
})