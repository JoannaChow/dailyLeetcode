/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const ROWs = board.length, COLs = board[0].length;
    function dfs(x: number, y: number) {
        if (x < 0 || x >= ROWs || y < 0 || y >= COLs || board[x][y] === "Y") {
            return;
        }
        if (board[x][y] === "O") {
            board[x][y] = "Y";
            dfs(x - 1, y);
            dfs(x + 1, y);
            dfs(x, y - 1);
            dfs(x, y + 1);
        }
    }
    for (let i = 0; i < ROWs; i++) {
        if (board[i][0] === "O") {
            board[i][0] = "Y"
            dfs(i, 1);
        }
        if (board[i][COLs - 1] === "O") {
            board[i][COLs - 1] = "Y"
            dfs(i, COLs - 2);
        }
    }
    for (let i = 0; i < COLs; i++) {
        if (board[0][i] === "O") {
            board[0][i] = "Y";
            dfs(1, i);
        }
        if (board[ROWs - 1][i] === "O") {
            board[ROWs - 1][i] = "Y";
            dfs(ROWs - 2, i);
        }
    }
    for (let i = 0; i < ROWs; i++) {
        for (let j = 0; j < COLs; j++) {
            if (board[i][j] === "O") {
                board[i][j] = "X";
            }
            if (board[i][j] === "Y") {
                board[i][j] = "O";
            }
        }
    }
};