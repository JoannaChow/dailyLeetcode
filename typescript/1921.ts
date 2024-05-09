function eliminateMaximum(dist: number[], speed: number[]): number {
    let countDown = dist.map((d, i) => Math.ceil(d / speed[i]));
    countDown.sort((a, b) => a - b);
    let max = 0,
        time = 0;
    while (countDown.length && countDown[0] > time) {
        max++;
        countDown.shift();
        time++;
    }
    return max;
}
