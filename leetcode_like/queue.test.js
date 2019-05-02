let {Queue} = require('./queue');
let expect = require('chai').expect;
const assert = require('assert');


describe('queue test', function () {
    it('出队入队测试', function () {
        let q = new Queue();
        q.enqueue('like');
        expect(q.dataStore).to.deep.equal(['like'])
        q.enqueue('like2')
        expect(q.dataStore).to.deep.equal(['like', 'like2'])
        q.dequeue()
        expect(q.dataStore).to.deep.equal(['like2'])
    })
})