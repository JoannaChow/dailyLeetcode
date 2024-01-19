function getSum(a: number, b: number): number {
    let xor = a ^ b, and = (a & b) << 1;
    while (and !== 0) {
        const newXOR = xor ^ and;
        const newAND = (xor & and) << 1;
        xor = newXOR;
        and = newAND;
    }

    return xor;
};