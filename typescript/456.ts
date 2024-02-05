function find132pattern(nums: number[]): boolean {
    const stack: number[][] = []; // mono decreasing stack, each pair [num, minLeft]
    let curMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        while (stack.length && num >= stack[stack.length - 1][0]) {
            stack.pop();
        }

        if (stack.length && num > stack[stack.length - 1][1]) {
            return true;
        }

        stack.push([num, curMin]);
        curMin = Math.min(curMin, num);
    }
    return false;
};