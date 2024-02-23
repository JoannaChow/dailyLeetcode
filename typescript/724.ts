function pivotIndex(nums: number[]): number {
  nums.unshift(0);
  nums.push(0);
  const countLen = nums.length,
    halfLen = Math.floor(countLen / 2);
  const forwardCount: number[] = Array(countLen).fill(0);
  const backwardCount: number[] = Array(countLen).fill(0);
  let ans = -1;
  for (let i = 1; i < countLen; i++) {
    forwardCount[i] = forwardCount[i - 1] + nums[i - 1];
    backwardCount[countLen - 1 - i] =
      backwardCount[countLen - i] + nums[countLen - i];
    if (i >= halfLen) {
      if (forwardCount[i] === backwardCount[i] && i < countLen - 1) {
        ans = ans > -1 ? Math.min(ans, i - 1) : i - 1;
      }
      if (
        forwardCount[countLen - 1 - i] === backwardCount[countLen - 1 - i] &&
        countLen - 1 - i > 0
      ) {
        ans = ans > -1 ? Math.min(ans, countLen - 2 - i) : countLen - 2 - i;
      }
    }
  }
  return ans;
}
