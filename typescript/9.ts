function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    const digits: number[] = [];
    while (x > 9) {
        digits.push(x % 10);
        x = Math.floor(x / 10);
    }
    while (digits.length > 0) {
        if (digits[0] === x) {
            digits.shift();
            if (digits.length) {
                x = digits.pop() as number;
            }
        } else break;
    }
    return digits.length === 0;
}
