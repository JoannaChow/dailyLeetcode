function maximumProfitable(nums: number[]): number {
    const stack: number[] = [];
    const N = nums.length;
    let R = 0;
    let E = Array(N).fill(0);
    for (let i = 0; i < N; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
            // [top..i - 1] is what we want. Note it may contain equal elements. 
            R += i - stack[stack.length - 1];
            stack.pop();
        }
        if (stack.length) {
            if (nums[stack[stack.length - 1]] > nums[i]) {
                E[i] = i - stack[stack.length - 1]
            } else {
                // they are equal
                E[i] = i - stack[stack.length - 1] + E[stack[stack.length - 1]] - 1
            }
        } else {
            E[i] = i + 1;
        }
        R += E[i];
        stack.push(i);
    }

    while (stack.length) {
        R += N - stack[stack.length - 1];
        stack.pop();
    }
    return R - N;
}
/*
def solution(v: List[int]) -> int:
    stack = []
    n, r = len(v), 0
    e = [0] * n
    for i in range(0, n):
        while len(stack) and v[stack[-1]] < v[i]:
            # [top..i - 1] is what we want. Note it may contain equal elements.
            r += i - stack.pop()
        if len(stack):
            e[i] = i - stack[-1] if v[stack[-1]] > v[i] else i - stack[-1] + e[stack[-1]] - 1
        else:
            e[i] = i + 1
        r += e[i]
        stack.append(i)
    while len(stack):
        # [top..n - 1] is what we want
        r += n - stack.pop()
    return r - n
*/
function maximumProfitable2(nums: number[]): number {
    const N = nums.length;
    const prevGreater = Array(N).fill(-1);
    const prevNonSmaller = Array(N).fill(-1);
    const prevNonSmallerCount = Array(N).fill(1);

    let stack: number[] = []; // decreasing mono stack, index in nums
    for (let i = 0; i < N; i++) {
        while (stack.length && nums[stack[stack.length - 1]] <= nums[i]) {
            stack.pop();
        }
        if (stack.length) {
            prevGreater[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    stack = [];
    for (let i = 0; i < N; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
            stack.pop();
        }
        if (stack.length) {
            prevNonSmaller[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    for (let i = 0; i < N; i++) {
        if (prevNonSmaller[i] > 0) {
            prevNonSmallerCount[i] = 1 + prevNonSmallerCount[prevNonSmaller[i]];
        }
    }

    let ans = 0;
    for (let i = 0; i < N; i++) {
        let prev = prevGreater[i];
        ans += (i - prev);
        if (prev >= 0) {
            ans += prevNonSmallerCount[prev];
        }
    }
    return ans;
}