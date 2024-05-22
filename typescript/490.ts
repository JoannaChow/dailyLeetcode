function hasPath(
    maze: number[][],
    start: number[],
    destination: number[]
): boolean {
    // explore the graph in dfs
    const rows = maze.length,
        cols = maze[0].length;
    const [dx, dy] = destination;
    const visited: boolean[][] = Array.from({ length: rows }, () =>
        Array(cols).fill(false)
    );
    visited[start[0]][start[1]] = true;
    return dfs(start[0], start[1]);
    function dfs(x: number, y: number): boolean {
        const directions = [
            [1, 0],
            [0, 1],
            [0, -1],
            [-1, 0],
        ];
        for (let i = 0; i < directions.length; i++) {
            const [moveX, moveY] = directions[i];
            let x2 = x,
                y2 = y;
            while (
                x2 + moveX >= 0 &&
                x2 + moveX < rows &&
                y2 + moveY >= 0 &&
                y2 + moveY < cols &&
                maze[x2 + moveX][y2 + moveY] !== 1
            ) {
                x2 += moveX;
                y2 += moveY;
            }
            if (!visited[x2][y2]) {
                visited[x2][y2] = true;
                if (x2 === dx && y2 === dy) return true;
                if (dfs(x2, y2)) return true;
            }
        }
        return false;
    }
}
