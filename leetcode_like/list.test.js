/**
 * test
 */

let List = require('./list');
let expect = require('chai').expect;
const assert = require('assert');
describe('list add  and remove test', function () {

    it('add Cynthia,Raymond,Barbara ', function () {
        let names = new List();
        expect(names.append("Raymond")).to.deep.equal(['Raymond'])
        expect(names.append("Barbara")).to.deep.equal(['Raymond', 'Barbara'])
        expect(names.append("Cynthia")).to.deep.equal(['Raymond', 'Barbara', 'Cynthia'])
        expect(names.insert("likechris", 'Cynthia')).equal(true)
        expect(names.insert("likechris", 'Cynthia111')).equal(false)
        expect(names.remove("Raymond")).to.deep.equal(true)
        expect(names.remove("Barbara")).to.deep.equal(true)
    });
    it('test remove',function(){
        let names = new List();
        names.append('like');
        names.append('like2');
        names.clean()
        assert.deepEqual(names.dataStore,[])
        assert.deepEqual(names.listSize,0)
        assert.deepEqual(names.pos,0)
    })
});

