// Bellman-Ford O(n*k)
function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    let prices: number[] = new Array(n).fill(Infinity);
    prices[src] = 0;

    for (let i = 0; i < k + 1; i++) {
        const tempPrices = prices.slice();

        for (const [from, to, price] of flights) {
            if (prices[from] === Infinity) continue;
            if (prices[from] + price < tempPrices[to]) {
                tempPrices[to] = prices[from] + price;
            }
        }
        prices = tempPrices;
    }
    return prices[dst] === Infinity ? -1 : prices[dst];
}

// MinHeap o(n^2 * logn)
/*
function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    const hash: Map<number, number[][]> = new Map();
    for (let [from, to, price] of flights) {
        if (!hash.has(from)) hash.set(from, []);
        hash.get(from)?.push([to, price]);
    }

    const queue: number[][] = [[0, 0, src]];
    let minPrice = Infinity;
    while (queue.length > 0) {
        const [price, stop, from] = queuePop();
        if (stop > k + 1 || price > minPrice) {
            continue;
        }

        if (from === dst) {
            minPrice = Math.min(minPrice, price);
            continue;
        }

        for (const [to, cost] of (hash.get(from) ?? [])) {
            if (stop <= k && price + cost < minPrice) {
                queuePush(to, stop + 1, price + cost);
            }
        }
    }
    return minPrice === Infinity ? -1 : minPrice;

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

    function queuePush(destination, stop, price) {
        queue.push([price, stop, destination]);
        let Index = queue.length - 1;
        while (Index > 0) {
            const parentIndex = Math.floor((Index - 1) / 2);
            if (parentIndex >= 0 && queue[parentIndex][0] > queue[Index][0]) {
                const temp = queue[parentIndex];
                queue[parentIndex] = queue[Index];
                queue[Index] = temp;
                Index = parentIndex;
            } else {
                break;
            }
        }
    }
}
*/
// DFS o(n^2)
/*
function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    const hash: Map<number, number[][]> = new Map();
    for (let [from, to, price] of flights) {
        if (!hash.has(from)) hash.set(from, []);
        hash.get(from)?.push([to, price]);
    }

    if (!hash.has(src)) return -1;
    const visited: Set<number> = new Set();
    let minPrice: number = Infinity;

    function dfs(from: number, stop: number, price: number) {
        if (stop > k + 1 || visited.has(from) || price > minPrice) return;

        if (from === dst) {
            minPrice = Math.min(minPrice, price);
            return;
        }

        visited.add(from);
        for (let [to, cost] of (hash.get(from) ?? [])) {
            dfs(to, stop + 1, price + cost);
        }
        visited.delete(from);
    }

    dfs(src, 0, 0);
    return minPrice === Infinity ? -1 : minPrice;
};
*/