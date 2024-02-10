function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const nextGreater = new Map();
    const stack: number[] = [0]; // stack of indices
    for (let i = 1; i < nums2.length; i++) {
        if (nums2[i] > nums2[i - 1]) {
            nextGreater.set(nums2[i - 1], nums2[i]);
            stack.pop();
        }
        for (let j = 0; j < stack.length; j++) {
            if (nums2[stack[j]] < nums2[i]) {
                nextGreater.set(nums2[stack[j]], nums2[i]);
                stack.splice(j, 1);
                j--;
            }
        }
        stack.push(i);
    }

    const ret: number[] = []
    for (let num of nums1) {
        ret.push(nextGreater.get(num) ?? -1);
    }
    return ret;
};