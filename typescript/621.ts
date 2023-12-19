class MaxHeap {
    heap: Task[];
    constructor(tasks: string[]) {
        const hash: Record<string, number> = {};
        for (let task of tasks) {
            if (hash[task] === undefined) {
                hash[task] = 1;
            } else {
                hash[task]++;
            }
        }
        this.heap = [];
        Object.keys(hash).forEach(task => {
            this.heapPush({
                name: task,
                count: hash[task]
            });
        })
    }

    heapPush(task: Task) {
        this.heap.push(task);
        let i = this.heap.length - 1;
        while (i > 0) {
            const parentIndex = Math.floor((i - 1) / 2);
            if (this.heap[parentIndex].count < this.heap[i].count) {
                const temp = this.heap[parentIndex];
                this.heap[parentIndex] = this.heap[i];
                this.heap[i] = temp;
                i = parentIndex;
            } else {
                break;
            }
        }
    }

    heapPop(): Task {
        const top = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        let i = 0;
        while (i < this.heap.length) {
            const leftChildIndex = (i * 2) + 1;
            const rightChildIndex = (i * 2) + 2;
            let moveIndex = -1;
            if (leftChildIndex < this.heap.length
                && this.heap[leftChildIndex].count > this.heap[i].count) {
                moveIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length
                && this.heap[rightChildIndex].count > this.heap[leftChildIndex].count) {
                if (this.heap[rightChildIndex].count > this.heap[i].count) {
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
}

type Task = {
    name: string;
    count: number;
}

type Ticket = {
    task: Task;
    time: number;
}

function leastInterval(tasks: string[], n: number): number {
    if (n === 0) {
        return tasks.length;
    }
    const maxHeap = new MaxHeap(tasks);
    const queue: Ticket[] = [];
    let clock = 0;
    const taskLine: string[] = [];
    while (maxHeap.getSize() > 0 || queue.length > 0) {
        if (queue.length > 0 && queue[0].time === clock) {
            const ticket = queue.shift() as Ticket;
            maxHeap.heapPush(ticket.task);
        }

        if (maxHeap.getSize() > 0) {
            const nextTask = maxHeap.heapPop();
            taskLine.push(nextTask.name);
            clock++;
            nextTask.count--;
            if (nextTask.count > 0) {
                queue.push({
                    task: nextTask,
                    time: clock + n
                })
            }
        } else {
            taskLine.push("idle");
            clock++;
        }
    }
    return taskLine.length;
};