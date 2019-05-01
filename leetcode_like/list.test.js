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
    });
    it('remove Raymond and Barbara', function () {
        let names = new List();
        expect(names.append("Raymond")).to.deep.equal(['Raymond'])
        expect(names.remove("Raymond")).to.deep.equal(true)
        expect(names.remove("Barbara")).to.deep.equal(false)
    })
});

