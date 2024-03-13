function largestNumber(nums: number[]): string {
    const strings: string[] = nums.map((n) => String(n));
    const result = strings
        .sort((s1, s2) => {
            if (s1 + s2 > s2 + s1) {
                return -1;
            }
            return 1;
        })
        .join("");
    return result.charAt(0) === "0" ? "0" : result;
}
