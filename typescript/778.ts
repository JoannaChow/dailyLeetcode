function swimInWater(grid: number[][]): number {
    const N = grid.length;
    const visited: Set<string> = new Set('0,0');  // "x,y"
    const queue: number[][] = [[grid[0][0], 0, 0]]; // [v, x, y]
    let T = 0;
    while (true) {
        let minNode = queuePop();
        visited.add(`${minNode[1]},${minNode[2]}`);
        T = Math.max(T, minNode[0]);
        const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let [moveX, moveY] of DIRECTIONS) {
            const nextX = minNode[1] + moveX, nextY = minNode[2] + moveY;
            if (nextX >= 0 && nextX < N && nextY >= 0 && nextY < N) {
                if (!visited.has(`${nextX},${nextY}`)) {
                    queuePush(Math.max(grid[nextX][nextY], T), nextX, nextY);
                }
            }
        }
        if (minNode[1] === N - 1 && minNode[2] === N - 1) break;
    }
    return T;

    function queuePush(v: number, x: number, y: number) {
        queue.push([v, x, y]);
        let Index = queue.length - 1;
        while (Index > 0) {
            const parentIndex = Math.floor((Index - 1) / 2);
            if (queue[parentIndex][0] > queue[Index][0]) {
                const temp = queue[parentIndex];
                queue[parentIndex] = queue[Index];
                queue[Index] = temp;
                Index = parentIndex;
            } else {
                break;
            }
        }
    }

    function queuePop() {
        const ret = queue[0];
        queue[0] = queue[queue.length - 1];
        queue.pop();
        let Index = 0;
        while (Index < queue.length) {
            const leftIndex = 2 * Index + 1, rightIndex = 2 * Index + 2;
            let moveIndex = -1;
            if (leftIndex < queue.length && queue[leftIndex][0] < queue[Index][0]) {
                moveIndex = leftIndex;
            }
            if (rightIndex < queue.length && queue[rightIndex][0] < queue[Index][0]) {
                if (moveIndex === -1 || queue[rightIndex][0] < queue[leftIndex][0]) {
                    moveIndex = rightIndex;
                }
            }
            if (moveIndex === -1) break;
            const temp = queue[moveIndex];
            queue[moveIndex] = queue[Index];
            queue[Index] = temp;
            Index = moveIndex;
        }
        return ret;
    }
};