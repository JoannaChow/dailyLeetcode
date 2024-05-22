class MinHeap {
    heap: number[];
    constructor() {
        this.heap = [];
    }
    getSize() {
        return this.heap.length;
    }

    pushHeap(num: number) {
        this.heap.push(num);
        let curIndex = this.heap.length - 1;
        while (curIndex > 0) {
            const parentIndex = Math.ceil(curIndex / 2) - 1;
            if (this.heap[parentIndex] > this.heap[curIndex]) {
                const temp = this.heap[parentIndex];
                this.heap[parentIndex] = this.heap[curIndex];
                this.heap[curIndex] = temp;
                curIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    getMin() {
        return this.heap[0];
    }

    popHeap() {
        const max = this.heap[0];
        this.heap[0] = this.heap.pop() as number;
        let curIndex = 0;
        while (curIndex < this.heap.length) {
            const leftIndex = 2 * curIndex + 1,
                rightIndex = 2 * curIndex + 2;
            let moveIndex = -1;
            if (this.heap[leftIndex] < this.heap[curIndex]) {
                moveIndex = leftIndex;
            }
            if (this.heap[rightIndex] < this.heap[curIndex]) {
                if (moveIndex !== -1) {
                    if (this.heap[rightIndex] < this.heap[leftIndex]) {
                        moveIndex = rightIndex;
                    }
                } else {
                    moveIndex = rightIndex;
                }
            }
            if (moveIndex === -1) break;
            const temp = this.heap[curIndex];
            this.heap[curIndex] = this.heap[moveIndex];
            this.heap[moveIndex] = temp;
            curIndex = moveIndex;
        }
        return max;
    }
}

class MaxHeap {
    heap: number[];
    constructor() {
        this.heap = [];
    }

    getSize() {
        return this.heap.length;
    }

    pushHeap(num: number) {
        this.heap.push(num);
        let curIndex = this.heap.length - 1;
        while (curIndex > 0) {
            const parentIndex = Math.ceil(curIndex / 2) - 1;
            if (this.heap[parentIndex] < this.heap[curIndex]) {
                const temp = this.heap[parentIndex];
                this.heap[parentIndex] = this.heap[curIndex];
                this.heap[curIndex] = temp;
                curIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    getMax() {
        return this.heap[0];
    }

    popHeap() {
        const min = this.heap[0];
        this.heap[0] = this.heap.pop() as number;
        let curIndex = 0;
        while (curIndex < this.heap.length) {
            const leftIndex = 2 * curIndex + 1,
                rightIndex = 2 * curIndex + 2;
            let moveIndex = -1;
            if (this.heap[leftIndex] > this.heap[curIndex]) {
                moveIndex = leftIndex;
            }
            if (this.heap[rightIndex] > this.heap[curIndex]) {
                if (moveIndex !== -1) {
                    if (this.heap[rightIndex] > this.heap[leftIndex]) {
                        moveIndex = rightIndex;
                    }
                } else {
                    moveIndex = rightIndex;
                }
            }
            if (moveIndex === -1) break;
            const temp = this.heap[curIndex];
            this.heap[curIndex] = this.heap[moveIndex];
            this.heap[moveIndex] = temp;
            curIndex = moveIndex;
        }
        return min;
    }
}

class MedianFinder {
    minheap: MinHeap;
    maxheap: MaxHeap;
    constructor() {
        this.minheap = new MinHeap();
        this.maxheap = new MaxHeap();
    }

    addNum(num: number): void {
        if (
            this.maxheap.getSize() === 0 ||
            (this.maxheap.getSize() > 0 && num <= this.maxheap.getMax())
        ) {
            this.maxheap.pushHeap(num);
        } else {
            this.minheap.pushHeap(num);
        }

        if (Math.abs(this.minheap.getSize() - this.maxheap.getSize()) > 1) {
            if (this.minheap.getSize() < this.maxheap.getSize()) {
                this.minheap.pushHeap(this.maxheap.popHeap());
            } else {
                this.maxheap.pushHeap(this.minheap.popHeap());
            }
        }
    }

    findMedian(): number {
        if (this.minheap.getSize() === this.maxheap.getSize()) {
            return (this.minheap.getMin() + this.maxheap.getMax()) / 2;
        } else if (this.maxheap.getSize() > this.minheap.getSize()) {
            return this.maxheap.getMax();
        } else {
            return this.minheap.getMin();
        }
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
