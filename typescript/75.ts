/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let zeros = 0, ones = 0;
    nums.forEach(num => {
        if (num === 0) zeros++;
        else if (num === 1) ones++;;
    });
    for (let i = 0; i < nums.length; i++) {
        if (zeros) {
            nums[i] = 0;
            zeros--;
        } else if (ones) {
            nums[i] = 1;
            ones--;
        } else {
            nums[i] = 2;
        }
    }
};