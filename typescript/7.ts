function reverse(x: number): number {
    const MIN = Math.pow(-2, 31);
    const MAX = Math.pow(2, 31) - 1;
    let res = 0;
    while (x !== 0) {
        let digit = x % 10;
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);

        if (res > Math.floor(MAX / 10) || (res === Math.floor(MAX / 10) && digit >= MAX % 10)) {
            return 0;
        }
        if (res < Math.ceil(MIN / 10) || (res === Math.ceil(MIN / 10) && digit <= MIN % 10)) {
            return 0;
        }
        res = (res * 10) + digit;
    }
    return res;
};