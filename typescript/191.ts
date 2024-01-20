// left shift
function hammingWeight(n: number): number {
    let res = 0;
    let checkingBit = 1;
    for (let i = 0; i < 32; i++) {
        if ((n & checkingBit) != 0) {
            res++;
        }
        checkingBit <<= 1;
    }
    return res;
};

/* unsigned right shift
function hammingWeight(n: number): number {
    let res = 0;
    while (n > 0) {
        res += n & 1;
        n = n >>> 1;
    }
    return res;
};
*/