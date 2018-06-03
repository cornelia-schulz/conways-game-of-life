const createBoard = require('../public/createBoard')

test ('all systems go', () => {
    expect(true).toBeTruthy
})

test ('createBoard returns a board with the right dimensions', () => {
    //arrange
    for (let i = 2; i < 10; i++){
        const board = createBoard(i)
        expect(board).toHaveLength(i)
        expect(board[1]).toHaveLength(i)
    } 
})