class queueNode {
    val: number;
    indices: number[];
    constructor(num: number, indices?: number[]) {
        this.val = num;
        this.indices = indices ?? [];
    }
}

class priorityQueue {
    queue: queueNode[];
    constructor(nums: number[]) {
        this.queue = [];
        nums.forEach((num, index) => this.pushVal(num, index));
    }
    pushVal(num: number, index: number) {
        const findIndex = this.queue.findIndex((e) => e.val === num);
        if (findIndex !== -1) {
            this.queue[findIndex].indices.push(index);
        } else {
            const newNode = new queueNode(num, [index]);
            this.queue.push(newNode);
            let curIndex = this.queue.length - 1;
            let parentIndex = Math.ceil(curIndex / 2) - 1;
            while (parentIndex >= 0 && this.queue[parentIndex].val < num) {
                let temp = this.queue[parentIndex];
                this.queue[parentIndex] = this.queue[curIndex];
                this.queue[curIndex] = temp;
                curIndex = parentIndex;
                parentIndex = Math.ceil(curIndex / 2) - 1;
            }
        }
    }
    popVal(num: number, index: number) {
        const findIndex = this.queue.findIndex((e) => e.val === num);
        const node = this.queue[findIndex];
        const newIndices = node.indices.filter((i) => i !== index);
        if (newIndices.length) {
            node.indices = newIndices;
        } else {
            let curIndex = findIndex;
            this.queue[findIndex] = this.queue[this.queue.length - 1];
            this.queue.pop();
            while (true) {
                let leftIndex = 2 * curIndex + 1,
                    rightIndex = 2 * curIndex + 2;
                let greaterIndex = 0;
                if (
                    leftIndex < this.queue.length &&
                    this.queue[leftIndex].val > this.queue[findIndex].val
                ) {
                    greaterIndex = leftIndex;
                }
                if (
                    rightIndex < this.queue.length &&
                    this.queue[rightIndex].val > this.queue[findIndex].val
                ) {
                    if (
                        greaterIndex === 0 ||
                        this.queue[rightIndex].val > this.queue[leftIndex].val
                    ) {
                        greaterIndex = rightIndex;
                    }
                }
                if (greaterIndex === 0) break;
                let temp = this.queue[greaterIndex];
                this.queue[greaterIndex] = this.queue[curIndex];
                this.queue[curIndex] = temp;
                curIndex = greaterIndex;
            }
        }
    }
    getTopNode() {
        return this.queue[0];
    }
    popNode() {
        this.queue.shift();
    }
}

function minimizeArrayValue(nums: number[]): number {
    let globMax = nums[0];
    let curSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        curSum += nums[i];
        globMax = Math.max(globMax, Math.ceil(curSum / (i + 1)));
    }
    return globMax;
    // tried MaxHeap
    // const queue = new priorityQueue(nums);

    // while (true) {
    //     let topNode = queue.getTopNode();
    //     topNode.indices.sort((a, b) => a - b);
    //     if (topNode.indices[0] === 0) break;

    //     // operate
    //     queue.popNode();
    //     for (const index of topNode.indices) {
    //         const preNum = nums[index - 1];
    //         queue.popVal(preNum, index - 1);

    //         while (nums[index] > nums[index - 1]) {
    //             nums[index] -= 1;
    //             nums[index - 1] += 1;
    //         }

    //         queue.pushVal(nums[index - 1], index - 1);
    //         queue.pushVal(nums[index], index);
    //     }
    // }
    // return queue.getTopNode().val;
}
