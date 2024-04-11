function findDifferentBinaryString(nums: string[]): string {
    const n = nums.length;
    let binaryStr = Array(n).fill("0");
    function backtrack(i: number) {
        if (i === n) {
            return false;
        }
        if (nums.indexOf(binaryStr.join("")) === -1) return true;
        if (backtrack(i + 1)) return true;
        binaryStr[i] = "1";
        if (nums.indexOf(binaryStr.join("")) === -1) return true;
        if (backtrack(i + 1)) return true;
        binaryStr[i] = "0";
        return false;
    }
    backtrack(0);
    return binaryStr.join("");
}
