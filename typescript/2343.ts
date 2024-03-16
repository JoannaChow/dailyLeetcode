function smallestTrimmedNumbers(nums: string[], queries: number[][]): number[] {
    const cache: Record<number, string[][]> = {};
    const result: number[] = [];
    cache[0] = nums.map((num, index) => [num, `${index}`]);
    for (let i = 0; i < nums[0].length; i++) {
        countSort(i);
    }
    for (let [k, trim] of queries) {
        result.push(Number(cache[trim][k - 1][1]));
    }
    return result;
    function countSort(digit: number) {
        let count = new Array(10).fill(0);
        let output = new Array(nums.length).fill(0);
        const strLen = nums[0].length;
        const arr = cache[digit];
        for (let i = 0; i < nums.length; i++) {
            let x = Number(arr[i][0][strLen - digit - 1]);
            count[x]++;
        }

        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            let x = Number(arr[i][0][strLen - digit - 1]);
            output[count[x] - 1] = arr[i];
            count[x]--;
        }

        cache[digit + 1] = output;
    }
}
