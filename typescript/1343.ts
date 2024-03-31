function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    let count = 0,
        sum = 0;
    for (let i = 0; i < k - 1; i++) {
        sum += arr[i];
    }
    for (let i = k - 1; i < arr.length; i++) {
        sum += arr[i];
        if (sum >= threshold * k) {
            count++;
        }
        sum -= arr[i - k + 1];
    }
    return count;
}
