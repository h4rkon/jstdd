class Cell {
    constructor(cellState){
        this.cellState = cellState;
    }

    nextState(amountOfLivingNeighbors){
        return false;
    }
}

let ALIVE = true;
let DEAD = false;

module.exports.Cell = Cell
module.exports.ALIVE = ALIVE
module.exports.DEAD = DEAD