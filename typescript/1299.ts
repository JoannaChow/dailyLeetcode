function replaceElements(arr: number[]): number[] {
    let curMax = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        const temp = arr[i];
        arr[i] = curMax;
        curMax = Math.max(curMax, temp);
    }
    return arr;
};