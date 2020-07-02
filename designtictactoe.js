//Objective is to design a tic-tac-toe game.


//Design of a tic-tac-toe game using rows, columns, and diagonals.

class TicTacToe {
    //Initialize w/ rows, columns, and 2 diagonals
    constructor(n) {
        this.rows = new Array(n).fill(0)
        this.cols = new Array(n).fill(0)
        this.diagonals = new Array(2).fill(0)
        this.size = n
    }

    //Find the right player and update the tile as well as the 
    //appropriate diagonal if needed
    move(row, col, player) {
        let update = (player == 1) ? 1 : -1
        this.rows[row] += update 
        this.cols[col] += update 
        if (row == col) {
            this.diagonals[0] += update 
        }
        if (row == this.size - col - 1) {
            this.diagonals[1] += update
        }

        if (Math.abs(this.rows[row]) == this.size || Math.abs(this.cols[col]) == this.size || Math.abs(this.diagonals[0]) == this.size || Math.abs(this.diagonals[1]) == this.size) {
            return player
        }

        return 0
    }
}

let map = new TicTacToe()
map.move(0,0,1)
map.move(0,2,2)
map.move(2,2,1)
map.move(1,1,2)
map.move(2,0,1)
map.move(1,0,2)
map.move(2,1,1)