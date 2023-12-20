class MaxHeap {
    heap: Tweet[];
    constructor() {
        this.heap = [];
    }

    heapPush(task: Tweet) {
        this.heap.push(task);
        let i = this.heap.length - 1;
        while (i > 0) {
            const parentIndex = Math.floor((i - 1) / 2);
            if (this.heap[parentIndex].time < this.heap[i].time) {
                const temp = this.heap[parentIndex];
                this.heap[parentIndex] = this.heap[i];
                this.heap[i] = temp;
                i = parentIndex;
            } else {
                break;
            }
        }
    }

    heapPop(): Tweet {
        const top = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        let i = 0;
        while (i < this.heap.length) {
            const leftChildIndex = (i * 2) + 1;
            const rightChildIndex = (i * 2) + 2;
            let moveIndex = -1;
            if (leftChildIndex < this.heap.length
                && this.heap[leftChildIndex].time > this.heap[i].time) {
                moveIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length
                && this.heap[rightChildIndex].time > this.heap[leftChildIndex].time) {
                if (this.heap[rightChildIndex].time > this.heap[i].time) {
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


type Tweet = {
    time: number;
    id: number;
}

class Twitter {
    users: Map<number, Set<number>>;
    tweets: Map<number, Tweet[]>;
    clock: number;
    constructor() {
        this.users = new Map();
        this.tweets = new Map();
        this.clock = 0;
    }

    postTweet(userId: number, tweetId: number): void {
        if (this.tweets[userId] === undefined) {
            this.tweets[userId] = [];
        }
        this.tweets[userId].push({ time: this.clock, id: tweetId });
        this.clock++;
    }

    getNewsFeed(userId: number): number[] {
        const res: number[] = [];
        const maxHeap = new MaxHeap();
        if (this.users[userId] === undefined) {
            this.users[userId] = new Set();
        }
        this.users[userId].add(userId);
        this.users[userId].forEach(followeeId => {
            if (this.tweets[followeeId] !== undefined) {
                this.tweets[followeeId].forEach(tweet => {
                    maxHeap.heapPush(tweet);
                })
            }
        })
        while (res.length < 10 && maxHeap.getSize() > 0) {
            const tweet = maxHeap.heapPop();
            res.push(tweet.id);
        }
        return res;
    }

    follow(followerId: number, followeeId: number): void {
        if (this.users[followerId] === undefined) {
            this.users[followerId] = new Set();
        }
        this.users[followerId].add(followeeId);
    }

    unfollow(followerId: number, followeeId: number): void {
        if (this.users[followerId] !== undefined && this.users[followerId].has(followeeId)) {
            this.users[followerId].delete(followeeId);
        }
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */