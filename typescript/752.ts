function openLock(deadends: string[], target: string): number {
    const visited = new Set(["0000"]);
    const queue: [string, number][] = [["0000", 0]];

    for (let [curr, turns] of queue) {
        if (curr === target) return turns;
        if (deadends.includes(curr)) continue;
        for (let next of getNext(curr)) {
            if (visited.has(next)) continue;
            visited.add(next);
            queue.push([next, turns + 1]);
        }
    }
    return -1;
    function getNext(s: string): string[] {
        const ans: string[] = [];
        for (let i = 0; i < s.length; i++) {
            ans.push(
                s.slice(0, i) +
                    ((Number(s[i]) + 1) % 10).toString() +
                    s.slice(i + 1)
            );
            ans.push(
                s.slice(0, i) +
                    ((Number(s[i]) + 9) % 10).toString() +
                    s.slice(i + 1)
            );
        }
        return ans;
    }
}
