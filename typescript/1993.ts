type NodeType = {
    locked: boolean;
    lockBy: number;
    children: number[];
};
class LockingTree {
    nodes: NodeType[];
    parent: number[];
    constructor(parent: number[]) {
        this.nodes = [];
        this.parent = parent;
        for (let i = 0; i < parent.length; i++) {
            this.nodes.push({
                locked: false,
                lockBy: -1,
                children: [],
            } as NodeType);
        }
        parent.forEach((pNdoe, node) => {
            if (node !== 0) {
                this.nodes[pNdoe].children.push(node);
            }
        });
    }

    lock(num: number, user: number): boolean {
        if (!this.nodes[num].locked) {
            this.nodes[num].locked = true;
            this.nodes[num].lockBy = user;
            return true;
        }
        return false;
    }

    unlock(num: number, user: number): boolean {
        if (this.nodes[num].locked && this.nodes[num].lockBy === user) {
            this.nodes[num].locked = false;
            return true;
        }
        return false;
    }

    upgrade(num: number, user: number): boolean {
        if (!this.nodes[num].locked) {
            let parent = this.parent[num];
            let anyParentisLocked = false;
            while (parent !== -1) {
                if (this.nodes[parent].locked) {
                    anyParentisLocked = true;
                    break;
                }
                parent = this.parent[parent];
            }
            if (anyParentisLocked) return false;

            const stack: number[] = [...this.nodes[num].children];
            let anyChildisLocked = false;
            while (stack.length) {
                let curNode = stack.shift() as number;
                if (this.nodes[curNode].locked) {
                    anyChildisLocked = true;
                    this.nodes[curNode].locked = false;
                }
                stack.push(...this.nodes[curNode].children);
            }
            if (!anyChildisLocked) return false;

            this.nodes[num].locked = true;
            this.nodes[num].lockBy = user;
            return true;
        }
        return false;
    }
}

/**
 * Your LockingTree object will be instantiated and called as such:
 * var obj = new LockingTree(parent)
 * var param_1 = obj.lock(num,user)
 * var param_2 = obj.unlock(num,user)
 * var param_3 = obj.upgrade(num,user)
 */
