class LinkedNode {
    key: number | null;
    val: number | null;
    count: number;
    prev: LinkedNode | null;
    next: LinkedNode | null;
    constructor() {
        this.key = null;
        this.val = null;
        this.count = 0;
        this.prev = null;
        this.next = null;
    }
}
class DoubleLinkedList {
    startNode: LinkedNode;
    endNode: LinkedNode;
    size: number;
    constructor() {
        this.startNode = new LinkedNode();
        this.endNode = new LinkedNode();
        this.startNode.next = this.endNode;
        this.endNode.prev = this.startNode;
        this.size = 0;
    }
    addNode(node: LinkedNode): void {
        const nextNode = this.startNode.next as LinkedNode;
        this.startNode.next = node;
        node.prev = this.startNode;
        nextNode.prev = node;
        node.next = nextNode;
        this.size++;
    }
    removeNode(node: LinkedNode) {
        const nextNode = node.next as LinkedNode;
        const prevNode = node.prev as LinkedNode;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        node.prev = null;
        node.next = null;
        this.size--;
    }
    popLast() {
        if (this.startNode === this.endNode.prev) {
            return null;
        }
        const last = this.endNode.prev as LinkedNode;
        this.removeNode(last);
        return last;
    }
    printNode() {
        let curNode: LinkedNode | null = this.startNode;
        let str = "";
        while (curNode) {
            str += `-${curNode.val ?? "*"}-`;
            curNode = curNode.next;
        }
        console.log(str);
    }
}
class LFUCache {
    size: number;
    capacity: number;
    mapOfNode: Map<number, LinkedNode>;
    mapOfList: Map<number, DoubleLinkedList>;
    constructor(capacity: number) {
        this.size = 0;
        this.capacity = capacity;
        this.mapOfNode = new Map();
        this.mapOfList = new Map();
    }

    get(key: number): number {
        const node = this.mapOfNode.get(key);
        if (!node) {
            return -1;
        }
        const list = this.mapOfList.get(node.count) as DoubleLinkedList;
        list.removeNode(node);
        if (list.size === 0) {
            this.mapOfList.delete(node.count);
        }
        node.count++;
        if (!this.mapOfList.get(node.count)) {
            this.mapOfList.set(node.count, new DoubleLinkedList());
        }
        this.mapOfList.get(node.count)?.addNode(node);
        return node.val as number;
    }

    put(key: number, value: number): void {
        let node: LinkedNode;
        if (!this.mapOfNode.get(key)) {
            // new node
            if (this.size === this.capacity) {
                let smallest = Infinity;
                this.mapOfList.forEach((mapval, mapkey) => {
                    smallest = Math.min(smallest, mapkey);
                });
                const list = this.mapOfList.get(smallest) as DoubleLinkedList;
                const removeNode = list.popLast();
                if (removeNode) {
                    this.mapOfNode.delete(removeNode.key as number);
                    if (list.size === 0) {
                        this.mapOfList.delete(removeNode.count as number);
                    }
                }
            } else {
                this.size++;
            }
            node = new LinkedNode();
            node.key = key;
            node.val = value;
            node.count++;
            this.mapOfNode.set(key, node);
        } else {
            node = this.mapOfNode.get(key) as LinkedNode;
            const list = this.mapOfList.get(node.count) as DoubleLinkedList;
            list.removeNode(node);
            if (list.size === 0) {
                this.mapOfList.delete(node.count);
            }
            node.val = value;
            node.count++;
        }

        if (!this.mapOfList.get(node.count)) {
            this.mapOfList.set(node.count, new DoubleLinkedList());
        }
        this.mapOfList.get(node.count)?.addNode(node);
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
