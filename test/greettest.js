
const assert = require('chai').assert;
const greet = require('../greet').greet;
const addNumbers = require('../greet').addNumbers;
const yearAgo = require('../greet').yearAgo;
const isFromLimpopo = require('../greet').isFromLimpopo;

// const app = require('../greet');

describe('App', function() {
    it('app should return hello, name', function(){
        let result = greet();
        assert.equal(greet('Mpho'), 'hello, Mpho');
    });

    it('greet should return type string', function(){
      let result = greet();
      assert.typeOf(result, 'string');

    });

    it('yearAgo should return a positive number', function(){
        let result = yearAgo(2000);
        assert.isNumber(result);
  
      });

    it('isFromLimpopo tshould return true if a registration number is for Limpopo otherwise returns false', function(){
        // let result = isFromLimpopo();
        assert.equal(isFromLimpopo('KTR 990 L'), true);
    })

    it('isFromLimpopo tshould return true if a registration number is for Limpopo otherwise returns false', function(){
        // let result = isFromLimpopo();
        assert.equal(isFromLimpopo('W 990 N'), false);
    })
});