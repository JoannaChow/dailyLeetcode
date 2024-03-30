function fourSum(nums: number[], target: number): number[][] {
    const ret: number[][] = [];
    function threeSum(threeSumIndex: number, t: number) {
        for (let i = threeSumIndex; i < nums.length; i++) {
            let front = i + 1,
                back = nums.length - 1;
            const twoSum = t - nums[i];
            while (front < back) {
                const sum = nums[front] + nums[back];
                if (sum < twoSum) front++;
                else if (sum > twoSum) back--;
                else {
                    const newSet = [
                        target - t,
                        nums[i],
                        nums[front],
                        nums[back],
                    ];
                    ret.push(newSet);

                    while (front < back && nums[front] === newSet[2]) front++;
                    while (front < back && nums[back] === newSet[3]) back--;
                }
            }
            while (nums[i + 1] === nums[i]) i++;
        }
    }

    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        threeSum(i + 1, target - nums[i]);
        while (nums[i + 1] === nums[i]) i++;
    }
    return ret;
}
