function singleNumber(nums: number[]): number {
    let ret = 0;
    for (let num of nums) {
        ret = ret ^ num;
    }
    return ret;
};