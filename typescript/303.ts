class NumArray {
  forwardCount: number[];
  nums: number[];
  constructor(nums: number[]) {
    this.nums = nums;
    this.forwardCount = [];
    this.forwardCount.push(0);
    for (let i = 1; i < nums.length; i++) {
      this.forwardCount[i] = this.forwardCount[i - 1] + nums[i - 1];
    }
  }

  sumRange(left: number, right: number): number {
    return (
      this.forwardCount[right] - this.forwardCount[left] + this.nums[right]
    );
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
