function isHappy(n: number): boolean {
    const oldNums: Set<number> = new Set();
    while (n !== 1) {
        let newNum = 0;
        while (n > 9) {
            newNum += Math.pow(n % 10, 2);
            n = Math.floor(n / 10);
        }
        newNum += Math.pow(n, 2);
        if (newNum === 1) return true;
        if (oldNums.has(newNum)) return false
        oldNums.add(newNum);
        n = newNum;
    }
    return n == 1;
};