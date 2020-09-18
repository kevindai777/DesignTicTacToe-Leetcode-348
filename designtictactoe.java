//Java Solution

class TicTacToe {

    private int[] rows;
    private int[] cols;
    private int[] diags;
    private int size;
    /** Initialize your data structure here. */
    public TicTacToe(int n) {
        rows = new int[n];
        cols = new int[n];
        diags = new int[2];
        size = n;
    }
    
    /** Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. */
    public int move(int row, int col, int player) {
        int update = (player == 1) ? 1 : -1;
        rows[row] += update;
        cols[col] += update;
        if (row == col) {
            diags[0] += update;
        }
        if (row == size - col - 1) {
            diags[1] += update;
        }
        
        if (Math.abs(rows[row]) == size || Math.abs(cols[col]) == size || Math.abs(diags[0]) == size || Math.abs(diags[1]) == size) {
            return player;
        }
        
        return 0;
    }
}
