const expect = require('chai').expect;
const assert = require('assert');
const { bubbleSort, selectionSort, quickSort } = require('./sort.js');

describe('排序测试', function () {
    it('冒泡排序测试', function () {
        expect(bubbleSort([5, 4, 3, 2, 1])).to.deep.equal([1, 2, 3, 4, 5])
        expect(bubbleSort([5, 4, 3, 1, 2])).to.deep.equal([1, 2, 3, 4, 5])
        expect(bubbleSort([1, 4, 3, 5, 2])).to.deep.equal([1, 2, 3, 4, 5])
    })
    it('选择排序测试', function () {
        expect(selectionSort([1, 5, 2, 3, 4, 8, 7])).to.deep.equal([1, 2, 3, 4, 5, 7, 8])
    })
    it('快速排序测试', function () {
        expect(quickSort([1, 5, 2, 3, 4])).to.deep.equal([5, 4, 3, 2, 1])
    })
})