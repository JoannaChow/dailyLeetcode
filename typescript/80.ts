function removeDuplicates(nums: number[]): number {
    if (nums.length <= 2) return nums.length;

    let countIndex = 1,
        index = 2;
    while (index < nums.length) {
        if (
            nums[index] === nums[countIndex] &&
            nums[index] === nums[countIndex - 1]
        ) {
            index++;
        } else {
            countIndex++;
            nums[countIndex] = nums[index];
            index++;
        }
    }
    return countIndex + 1;
}
