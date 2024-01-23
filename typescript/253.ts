/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (intervals.length === 0) return 0;

        const queue = [];
        let ans = 1;
        intervals.sort((a, b) => a.start - b.start || a.end - b.end);

        let preStart = intervals[0].start;
        let preEnd = intervals[0].end;
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i].start >= preEnd) {
                preEnd = intervals[i].end;
                continue;
            }

            queue.push(preEnd > intervals[i].end ? new Interval(preStart, preEnd) : intervals[i]);
            preEnd = preEnd > intervals[i].end ? intervals[i].end : preEnd;
            preStart = preEnd > intervals[i].end ? intervals[i].start : preStart;
        }

        if (queue.length) {
            ans += this.minMeetingRooms(queue);
        }
        return ans;
    }
}
