var assert = require('assert');
var Cell = require('../src/cell.js');
var ALIVE = require('../src/cell.js');
var DEAD = require('../src/cell.js');

describe('Game of life', function() {
  describe('Cell rules', function(){
    it('instanciation of a cell object', function() {
      // arrange
      let cell = new Cell(true);
      // act
      // assert
      assert.notEqual(typeof cell, 'undefined');
      assert.notEqual(cell, null);
    });

    it('Cell will die with no living neighbors', function(){
      // arrange
      let cell = new Cell(ALIVE);

      // act
      nextState = cell.nextState(0);

      // assert
      assert.equal(nextState, false);
    });
  });
});