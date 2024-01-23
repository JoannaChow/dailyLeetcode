function insert(intervals: number[][], newInterval: number[]): number[][] {
    let [newStart, newEnd] = newInterval;
    const ans: number[][] = [];
    let inserted = false;
    for (let i = 0; i < intervals.length; i++) {
        if (inserted) {
            ans.push(intervals[i]);
            continue;
        }

        const [start, end] = intervals[i];
        if (newEnd < start) {
            ans.push([newStart, newEnd], [start, end]);
            inserted = true;
        } else if (newStart > end) {
            ans.push([start, end]);
        } else {
            newStart = Math.min(newStart, start);
            newEnd = Math.max(newEnd, end);
        }
    }
    if (!inserted) ans.push([newStart, newEnd]);

    return ans;
};