function solveNQueens(n: number): string[][] {
    const res: string[][] = [];
    const board: string[] = [];
    function backtrack(queenIndex: number) {
        for (let col = 0; col < n; col++) {
            if (isNoAttack(queenIndex, col)) {
                board.push(genRow(col));
                if (queenIndex === n - 1) {
                    res.push(board.slice());
                    board.pop();
                    break;
                } else {
                    backtrack(queenIndex + 1);
                    board.pop();
                }
            }
        }
    }
    backtrack(0);
    return res;
    function genRow(queenIndex: number) {
        let row = "";
        for (let i = 0; i < queenIndex; i++) {
            row = row + ".";
        }
        row = row + "Q";
        for (let i = queenIndex + 1; i < n; i++) {
            row = row + ".";
        }
        return row;
    }
    function isNoAttack(row: number, col: number) {
        for (let i = row - 1; i >= 0; i--) {
            if (board[i][col] === "Q") {
                return false;
            }
        }
        let x = row - 1, y = col + 1;
        while (x >= 0 && y < n) {
            if (board[x][y] === "Q") {
                return false;
            }
            x--;
            y++;
        }
        x = row - 1, y = col - 1;
        while (x >= 0 && y >= 0) {
            if (board[x][y] === "Q") {
                return false;
            }
            x--;
            y--;
        }
        return true;
    }
};