const createBoard = require('./createBoard.js')

function updateBoard() {
    let board = createBoard(5)
    console.log(board)
    // loop over each row of the board
    for (let row = 0; row < board.length; row++) {
        // loop over each item in that row
        for (let column = 0; column < board[row].length; column++) {
            let cell = board[row][column]
            // check if neighbouring cells are alive or dead
            // add them to the counter if they are alive
            let counter = 0
            if (board[row - 1][column - 1] === '*') {
                counter += 1
            }
            if (board[row - 1][column] === '*') {
                counter += 1
            }
            if (board[row - 1][column + 1] === '*') {
                counter += 1
            }
            if (board[row][column - 1] === '*') {
                counter += 1
            }
            if (board[row][column + 1] === '*') {
                counter += 1
            }
            if (board[row + 1][column - 1] === '*') {
                counter += 1
            }
            if (board[row + 1][column] === '*') {
                counter += 1
            }
            if (board[row + 1][column + 1] === '*') {
                counter += 1
            }
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
                else if (cell === '!') {
                    if (counter === 3) {
                        cell = '*'
                    }
                }
            }
        }

        console.log(board)
        return board
    }
}
updateBoard()