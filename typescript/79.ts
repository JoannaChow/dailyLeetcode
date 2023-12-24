function exist(board: string[][], word: string): boolean {
    function backtrack(x: number, y: number, index: number) {
        if (index === word.length) {
            return true;
        }
        if (x >= 0 && x < board.length && y >= 0 && y < board[0].length) {
            if (board[x][y] === word[index]) {
                board[x][y] = "";
                const result = (
                    backtrack(x + 1, y, index + 1) ||
                    backtrack(x - 1, y, index + 1) ||
                    backtrack(x, y + 1, index + 1) ||
                    backtrack(x, y - 1, index + 1)
                );
                board[x][y] = word[index];
                return result;
            }
        }
        return false;
    }
    let ret = false;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                ret = ret || backtrack(i, j, 0);
            }
        }
    }
    return ret;
};