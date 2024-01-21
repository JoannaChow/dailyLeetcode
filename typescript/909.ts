function snakesAndLadders(board: number[][]): number {
    const n = board.length;
    if (n < 3) return 1;

    const [destRow, destCol] = getRowCol(n * n, n);

    const visited: Set<number> = new Set([1]);
    const queue: number[][] = [[0, 1]]; // [step, square]

    while (queue.length > 0) {
        const [step, next] = queue.shift() as number[];
        for (let i = 1; i <= 6; i++) {
            if (next + i > n * n) break;

            const [moveRow, moveCol] = getRowCol(next + i, n);

            if (moveRow === destRow && moveCol === destCol) {
                return step + 1;
            }

            if (board[moveRow][moveCol] != -1 && !visited.has(board[moveRow][moveCol])) {
                visited.add(board[moveRow][moveCol]);
                const [newRow, newCol] = getRowCol(board[moveRow][moveCol], n);
                if (newRow === destRow && newCol === destCol) {
                    return step + 1;
                }
                queue.push([step + 1, board[moveRow][moveCol]]);
            } else if (board[moveRow][moveCol] === -1 && !visited.has(next + i)) {
                visited.add(next + i);
                queue.push([step + 1, next + i]);
            }
        }
    }

    return -1;
};

function getRowCol(square: number, n: number) {
    const row = Math.floor((square - 1) / n);
    const col = row % 2 === 0 ? (square - 1) % n : (n - 1) - ((square - 1) % n);
    return [(n - 1) - row, col];
}