const createBoard = require('./createBoard.js')
const clear = require('clear')

function updateBoard() {
    let board = createBoard(10)
    let updated = true;
    let c = 0;

    while (updated === true) {
        c++;
        clear(true);
        console.log(board)
        updated = false;
        // loop over each row of the board
        for (let row = 0; row < board.length; row++) {
            // loop over each item in that row
            for (let column = 0; column < board[row].length; column++) {
                let cell = board[row][column]
                // check if neighbouring cells are alive or dead
                // add them to the counter if they are alive
                let counter = 0
                if ((row - 1) >= 0 && board[column - 1] && board[row - 1][column - 1] === '*') {
                    counter += 1
                }
                if ((row - 1) >= 0 && board[row - 1][column] === '*') {
                    counter += 1
                }
                if ((row - 1) >= 0 && (column + 1) < board.length && board[row - 1][column + 1] === '*') {
                    counter += 1
                }
                if ((column - 1) >= 0 && board[row][column - 1] === '*') {
                    counter += 1
                }
                if ((column + 1) < board.length && board[row][column + 1] === '*') {
                    counter += 1
                }
                if ((row + 1) < board.length && (column - 1) >= 0 && board[row + 1][column - 1] === '*') {
                    counter += 1
                }
                if ((row + 1) < board.length && board[row + 1][column] === '*') {
                    counter += 1
                }
                if ((row + 1) < board.length && (column + 1) < board.length && board[row + 1][column + 1] === '*') {
                    counter += 1
                }
                //console.log('counter:', counter)
                // check if cell is alive or dead and: 
                // if cell is alive and has less than 2 live neighbours, kill the cell
                // if cell is alive and has 2-3 live neighbours, keep it alive
                // if cell is alive and has more than 3 live neighbours, kill the cell
                // if cell is dead and has exactly 3 live neighbours, resurrect cell
                if (cell === '*') {
                    if (counter < 2) {
                        cell = '!'    // if live cell has less than 2 neighbours - kill cell
                    }
                    else if (counter === 2 || counter === 3) {
                        cell = '*'
                    }
                    else if (counter > 3) {
                        cell = '!'
                    }
                }
                else if (cell === '!') {
                    if (counter === 3) {
                        cell = '*'
                    }
                }

                if (board[row][column] !== cell) {
                    updated = true
                }
                board[row][column] = cell
            }
        }
    }
    //console.log('after:', board)
    console.log(c);
    return board
}
updateBoard()