function plusOne(digits: number[]): number[] {
    digits[digits.length - 1]++;
    let checkIndex = digits.length - 1;
    while (checkIndex >= 0 && digits[checkIndex] > 9) {
        digits[checkIndex] = 0;
        if (checkIndex - 1 >= 0) {
            digits[checkIndex - 1]++;
        }
        checkIndex--;
    }

    if (digits[0] === 0) {
        digits.unshift(1);
    }
    return digits;
};