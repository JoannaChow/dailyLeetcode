function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map();
    nums.forEach((num) => {
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
        }
    });
    const mapArr = [...map.entries()];
    mapArr.sort((a, b) => b[1] - a[1]);
    return mapArr.slice(0, k).map((set) => set[0]);
}
