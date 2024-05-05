function maxTurbulenceSize(arr: number[]): number {
    let curCount = arr.length > 1 && arr[0] !== arr[1] ? 1 : 0,
        curMax = curCount,
        nextBeGreater = arr[0] < arr[1];
    for (let k = 1, p = 2; p < arr.length; k++, p++) {
        if (curCount > 0) {
            if (nextBeGreater === arr[k] > arr[p] && arr[k] !== arr[p]) {
                nextBeGreater = !nextBeGreater;
                curCount++;
                curMax = Math.max(curMax, curCount);
                continue;
            }
        }
        curCount = arr[k] === arr[p] ? 0 : 1;
        curMax = Math.max(curMax, curCount);
        nextBeGreater = arr[k] < arr[p];
    }
    return curMax + 1;
}
