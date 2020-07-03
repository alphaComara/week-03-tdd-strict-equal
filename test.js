const describe = require('mocha').describe
const it = require('mocha').it
//const { expect } = require('chai')
 const assert = require('assert')
const strictEqual = require('./strictEqual')
describe('strictEqual',function(){
    it('return false if data doesnt match',function(){
        let falseInfo = [5,'5']
        let result = strictEqual(falseInfo)
        assert.equal(result,false)
       // expect(result).to.equal(false)
    })
})

