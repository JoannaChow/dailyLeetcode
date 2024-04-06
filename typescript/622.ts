class LinkedNode {
    val: number;
    next: LinkedNode | null;
    constructor() {
        this.val = 0;
        this.next = null;
    }
}

class MyCircularQueue {
    capacity: number;
    size: number;
    queueHead: LinkedNode;
    queueTail: LinkedNode;
    constructor(k: number) {
        this.capacity = k;
        this.size = 0;
        this.queueHead = new LinkedNode();
        this.queueTail = new LinkedNode();
    }

    enQueue(value: number): boolean {
        const newNode = new LinkedNode();
        newNode.val = value;
        if (this.size === 0) {
            this.queueHead.next = newNode;
            this.queueTail.next = newNode;
            this.size++;
            return true;
        } else if (this.size < this.capacity) {
            (this.queueTail.next as LinkedNode).next = newNode;
            this.queueTail.next = newNode;
            this.size++;
            return true;
        }
        return false;
    }

    deQueue(): boolean {
        if (this.size === 0) {
            return false;
        }
        const headNode = this.queueHead.next as LinkedNode;
        this.queueHead.next = headNode.next;
        this.size--;
        return true;
    }

    Front(): number {
        if (this.size === 0) {
            return -1;
        }
        return (this.queueHead.next as LinkedNode).val;
    }

    Rear(): number {
        if (this.size === 0) {
            return -1;
        }
        return (this.queueTail.next as LinkedNode).val;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    isFull(): boolean {
        return this.size === this.capacity;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
