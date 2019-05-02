const expect = require('chai').expect;
const assert = require('assert');
const { bubbleSort } = require('./sort.js');

describe('排序测试',function(){
    it('冒泡排序测试',function(){
        expect(bubbleSort([5,4,3,2,1])).to.deep.equal([1,2,3,4,5])
        expect(bubbleSort([5,4,3,1,2])).to.deep.equal([1,2,3,4,5])
        expect(bubbleSort([1,4,3,5,2])).to.deep.equal([1,2,3,4,5])
    })
})