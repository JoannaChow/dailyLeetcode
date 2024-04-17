function checkMove(
    board: string[][],
    rMove: number,
    cMove: number,
    color: string
): boolean {
    const DIRECTIONs = [
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1],
        [-1, 0],
        [-1, 1],
    ];
    const oppositeColor = color === "W" ? "B" : "W";
    for (let [toR, toC] of DIRECTIONs) {
        const r = rMove + toR,
            c = cMove + toC;
        if (dfs(r, c, toR, toC)) return true;
    }
    return false;

    function dfs(r: number, c: number, toR: number, toC: number) {
        if (r < 0 || r >= 8 || c < 0 || c >= 8) return false;
        if (board[r][c] === color) {
            return r - toR !== rMove || c - toC !== cMove;
        }
        if (board[r][c] === oppositeColor) {
            //keep moving
            return dfs(r + toR, c + toC, toR, toC);
        }
        // reach a free cell
        return false;
    }
}
