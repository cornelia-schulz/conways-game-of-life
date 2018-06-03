module.exports = createBoard

function createBoard (cells) {
  let board = []
  for (let i = 0; i < cells; i++) {
    let row = []
    for (let j = 0; j < cells; j++) {
      let state = Math.floor(Math.random() * Math.floor(10))
      if (state < 6) {
        //row.push({row: i, col: j, isAlive: false})
        row.push('!')
      } else {
        //row.push({row: i, col: j, isAlive: true})
        row.push('*')
      }
    }
    board.push(row)
  }
  //console.log(board)
  return board
}
//createBoard(5)