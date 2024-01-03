function networkDelayTime(times: number[][], n: number, k: number): number {
    const hash: Map<number, number[][]> = new Map(); // source: [target, weight]
    for (let [u, v, w] of times) {
        if (!hash.has(u)) hash.set(u, []);
        hash.get(u)?.push([v, w]);
    }

    const visited: Set<number> = new Set();
    let res = 0;
    const queue: number[][] = [[0, k]]; // [time, node]
    while (visited.size < n && queue.length > 0) {
        const [time, node] = queuePop();
        if (!visited.has(node)) {
            visited.add(node);
            res = time;
            if (hash.has(node)) {
                const edges = hash.get(node) as number[][];
                for (let [nextTarget, nextTime] of edges) {
                    queuePush(nextTarget, nextTime + time);
                }
            }
        }
    }
    return visited.size < n ? -1 : res;

    function queuePush(node: number, time: number) {
        queue.push([time, node]);
        let index = queue.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (queue[parentIndex][0] > queue[index][0]) {
                const temp = queue[parentIndex];
                queue[parentIndex] = queue[index];
                queue[index] = temp;
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    function queuePop() {
        const ret = queue[0].slice();
        queue[0] = queue[queue.length - 1];
        queue.pop();
        let index = 0;
        while (index < queue.length) {
            const leftIndex = index * 2 + 1, rightIndex = index * 2 + 2;
            let moveIndex = -1;
            if (leftIndex < queue.length && queue[leftIndex][0] < queue[index][0]) {
                moveIndex = leftIndex;
            }
            if (rightIndex < queue.length && queue[rightIndex][0] < queue[index][0]) {
                if (moveIndex === -1 || queue[rightIndex][0] < queue[leftIndex][0]) {
                    moveIndex = rightIndex;
                }
            }
            if (moveIndex === -1) break;
            const temp = queue[moveIndex];
            queue[moveIndex] = queue[index];
            queue[index] = temp;
            index = moveIndex;
        }
        return ret;
    }
};