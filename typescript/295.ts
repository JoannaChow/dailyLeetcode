class MaxHeap {
    private heap: number[];
    constructor() {
        this.heap = [];
    }

    heapPush(num: number) {
        this.heap.push(num);
        let i = this.heap.length - 1;
        while (i > 0) {
            const parentIndex = Math.floor((i - 1) / 2);
            if (this.heap[parentIndex] < this.heap[i]) {
                const temp = this.heap[parentIndex];
                this.heap[parentIndex] = this.heap[i];
                this.heap[i] = temp;
                i = parentIndex;
            } else {
                break;
            }
        }
    }

    heapPop(): number {
        const top = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        let i = 0;
        while (i < this.heap.length) {
            const leftChildIndex = (i * 2) + 1;
            const rightChildIndex = (i * 2) + 2;
            let moveIndex = -1;
            if (leftChildIndex < this.heap.length
                && this.heap[leftChildIndex] > this.heap[i]) {
                moveIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length
                && this.heap[rightChildIndex] > this.heap[leftChildIndex]) {
                if (this.heap[rightChildIndex] > this.heap[i]) {
                    moveIndex = rightChildIndex;
                }
            }
            if (moveIndex === -1) {
                break;
            }
            const temp = this.heap[moveIndex];
            this.heap[moveIndex] = this.heap[i];
            this.heap[i] = temp;
            i = moveIndex;
        }
        return top;
    }

    getSize(): number {
        return this.heap.length;
    }

    getTop(): number {
        return this.heap[0];
    }
}

class MinHeap {
    private heap: number[];
    constructor() {
        this.heap = [];
    }

    heapPush(num: number) {
        this.heap.push(num);
        let i = this.heap.length - 1;
        while (i > 0) {
            const parentIndex = Math.floor((i - 1) / 2);
            if (this.heap[parentIndex] > this.heap[i]) {
                const temp = this.heap[parentIndex];
                this.heap[parentIndex] = this.heap[i];
                this.heap[i] = temp;
                i = parentIndex;
            } else {
                break;
            }
        }
    }

    heapPop(): number {
        const top = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        let i = 0;
        while (i < this.heap.length) {
            const leftChildIndex = (i * 2) + 1;
            const rightChildIndex = (i * 2) + 2;
            let moveIndex = -1;
            if (leftChildIndex < this.heap.length
                && this.heap[leftChildIndex] < this.heap[i]) {
                moveIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length
                && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
                if (this.heap[rightChildIndex] < this.heap[i]) {
                    moveIndex = rightChildIndex;
                }
            }
            if (moveIndex === -1) {
                break;
            }
            const temp = this.heap[moveIndex];
            this.heap[moveIndex] = this.heap[i];
            this.heap[i] = temp;
            i = moveIndex;
        }
        return top;
    }

    getSize(): number {
        return this.heap.length;
    }

    getTop(): number {
        return this.heap[0];
    }
}

class MedianFinder {
    smallHeap: MaxHeap; // size n+1
    largeHeap: MinHeap; // size n
    constructor() {
        this.smallHeap = new MaxHeap();
        this.largeHeap = new MinHeap();
    }

    addNum(num: number): void { // log(n)
        if (num < this.smallHeap.getTop()) {
            this.smallHeap.heapPush(num);
        } else {
            this.largeHeap.heapPush(num);
        }

        if (this.smallHeap.getSize() > this.largeHeap.getSize() + 1) {
            const smallHeapTop = this.smallHeap.heapPop();
            this.largeHeap.heapPush(smallHeapTop);
        } else if (this.smallHeap.getSize() < this.largeHeap.getSize()) {
            const largeHeapTop = this.largeHeap.heapPop();
            this.smallHeap.heapPush(largeHeapTop);
        }
    }

    findMedian(): number {  // O(1)
        let ret = this.smallHeap.getTop();
        if (this.smallHeap.getSize() === this.largeHeap.getSize()) {
            ret = (ret + this.largeHeap.getTop()) / 2;
        }
        return ret;
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */