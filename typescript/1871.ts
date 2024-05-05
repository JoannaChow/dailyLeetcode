function canReach(s: string, minJump: number, maxJump: number): boolean {
    const queue = [0];
    const target = s.length - 1;
    let farest = 0;
    if (s[target] === "1") return false;

    while (queue.length) {
        const next = queue.shift() as number;
        for (
            let j = Math.max(farest + 1, next + minJump);
            j <= Math.min(next + maxJump, target);
            j++
        ) {
            if (j === target) return true;
            if (s[j] === "1") continue;

            queue.push(j);
        }
        farest = next + maxJump;
    }
    return false;
}
