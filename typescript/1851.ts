// O(nlogn)
function minInterval(intervals: number[][], queries: number[]): number[] {
    const result: number[] = [];
    intervals.sort((a, b) => a[0] - b[0]);
    const sortedQueries = [...queries].sort((a, b) => a - b);
    const minHash = {};
    const minHeap = new MinHeap();
    let index = 0;

    for (let i = 0; i < sortedQueries.length; i++) {
        const query = sortedQueries[i];
        if (minHash[query]) {
            continue;
        }

        while (index < intervals.length && intervals[index][1] < query) {
            index++;
        }

        while (index < intervals.length && intervals[index][0] <= query) {
            minHeap.push([intervals[index][1] - intervals[index][0] + 1, intervals[index][1]]);
            index++;
        }

        while (minHeap.heap.length > 0 && minHeap.heap[0][1] < query) {
            minHeap.pop();
        }

        minHash[query] = minHeap.heap.length !== 0 ? minHeap.heap[0][0] : -1;
    }

    for (let i = 0; i < queries.length; i++) {
        result.push(minHash[queries[i]]);
    }
    return result;
}

class MinHeap {
    heap: number[][];
    constructor() {
        this.heap = []
    }

    push(interval: number[]) {
        this.heap.push(interval);
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index][0] < this.heap[parentIndex][0]) {
                const temp = this.heap[parentIndex];
                this.heap[parentIndex] = this.heap[index];
                this.heap[index] = temp;
                index = parentIndex;
            } else break;
        }
    }

    pop() {
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();

        let index = 0;
        while (true) {
            let leftChildIndex = 2 * index + 1, rightChildIndex = 2 * index + 2;
            let moveIndex = -1;
            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex][0] < this.heap[index][0]) {
                moveIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex][0] < this.heap[index][0]) {
                if (moveIndex === -1 || this.heap[rightChildIndex][0] < this.heap[leftChildIndex][0]) {
                    moveIndex = rightChildIndex;
                }
            }
            if (moveIndex === -1) break;
            const temp = this.heap[moveIndex];
            this.heap[moveIndex] = this.heap[index];
            this.heap[index] = temp;
            index = moveIndex;
        }
    }
}
/* O(q*n^2*logn)
function minInterval(intervals: number[][], queries: number[]): number[] {
    intervals.sort((a, b) => a[0] - b[0]);

    function findMinInterval(query): number {
        let curMin = Infinity;
        for (let i = 0; i < intervals.length; i++) {
            const [left, right] = intervals[i];
            if (left <= query && right >= query) {
                curMin = Math.min(curMin, right - left + 1);
            } else if (left > query) break;
        }
        return curMin === Infinity ? -1 : curMin;
    }

    const output: number[] = [];
    queries.forEach(query => output.push(findMinInterval(query)));
    return output;
};
*/