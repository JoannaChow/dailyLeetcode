function leastBricks(wall: number[][]): number {
    const hash: Record<number, number> = {};
    wall.forEach((row) => {
        let base = 0;
        row.forEach((brick, index) => {
            if (index + 1 === row.length) return;
            if (!hash[base + brick]) {
                hash[base + brick] = 0;
            }
            hash[base + brick]++;
            base += brick;
        });
    });
    let maxGap = 0;
    Object.keys(hash).forEach((key) => (maxGap = Math.max(maxGap, hash[key])));
    return wall.length - maxGap;
}
