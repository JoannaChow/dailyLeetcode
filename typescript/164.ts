function maximumGap(nums: number[]): number {
    if (nums.length < 2) return 0;

    radixSort();
    let result = 0;
    for (let i = 1; i < nums.length; i++) {
        result = Math.max(result, nums[i] - nums[i - 1]);
    }
    return result;

    function radixSort() {
        let max = nums.reduce((a, b) => Math.max(a, b));
        const digits = Math.floor(Math.log10(max)) + 1;
        for (let i = 0; i < digits; i++) {
            countSort(i);
        }
    }
    function countSort(digit: number) {
        let count = new Array(10).fill(0);
        let output = new Array(nums.length).fill(0);

        for (let i = 0; i < nums.length; i++) {
            let x = Math.floor(nums[i] / Math.pow(10, digit)) % 10;
            count[x]++;
        }

        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            let x = Math.floor(nums[i] / Math.pow(10, digit)) % 10;
            output[count[x] - 1] = nums[i];
            count[x]--;
        }

        for (let i = 0; i < nums.length; i++) {
            nums[i] = output[i];
        }
    }
}
