// O(n)
function jump(nums: number[]): number {
    let step = 0;
    let left = 0, right = 0;
    while (right < nums.length - 1) {
        step++;
        const newLeft = right + 1;
        let newRight = newLeft;
        for (let i = left; i <= right; i++) {
            newRight = Math.max(newRight, i + nums[i]);
        }
        left = newLeft;
        right = newRight;
    }
    return step;
}
/* O(nm)
function jump(nums: number[]): number {
    const minSteps: number[] = Array(nums.length).fill(0);
    for (let i = minSteps.length - 2; i >= 0; i--) {
        const target = minSteps.length - 1;
        for (let step = nums[i]; step > 0; step--) {
            if (step + i === target) {
                minSteps[i] = 1;
                break;
            } else if (step + i < target && minSteps[step + i] > 0) {
                if (minSteps[i] === 0) minSteps[i] = 1 + minSteps[step + i];
                else minSteps[i] = Math.min(minSteps[i], 1 + minSteps[step + i]);
            }
        }
    }
    return minSteps[0];
};*/