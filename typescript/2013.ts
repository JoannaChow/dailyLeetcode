class DetectSquares {
    pointCount: Record<string, number>;
    points: number[][];
    constructor() {
        this.pointCount = {};
        this.points = [];
    }

    add(point: number[]): void {
        const mapKey = point.join();
        if (this.pointCount[mapKey] === undefined) {
            this.pointCount[mapKey] = 0;
            this.points.push(point);
        }
        this.pointCount[mapKey]++;
    }

    count(point: number[]): number {
        let ans = 0;
        const [px, py] = point;
        for (let [x, y] of this.points) {
            if (Math.abs(px - x) !== Math.abs(py - y) || px === x || py === y) {
                continue;
            }
            if (this.pointCount[[x, py].join()] && this.pointCount[[px, y].join()]) {
                ans += this.pointCount[[x, y].join()] * this.pointCount[[x, py].join()] * this.pointCount[[px, y].join()]
            }
        }
        return ans;
    }
}

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */