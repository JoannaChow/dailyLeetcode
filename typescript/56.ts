function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    let [mergingStart, mergingEnd] = intervals[0];
    const ans: number[][] = [];
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i]
        if (mergingEnd < start) {
            ans.push([mergingStart, mergingEnd]);
            mergingStart = start;
            mergingEnd = end;
            continue;
        }
        mergingEnd = Math.max(mergingEnd, end);
    }
    ans.push([mergingStart, mergingEnd]);
    return ans;
};