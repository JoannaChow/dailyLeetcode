function multiply(num1: string, num2: string): string {
    if (num1 === "0" || num2 === "0") return "0";
    const digits: number[] = [];
    const code0 = "0".charCodeAt(0);
    for (let i = 1; i <= num1.length; i++) {
        for (let j = 1; j <= num2.length; j++) {
            const digLen = digits.length;
            const product = (num1.charCodeAt(num1.length - i) - code0) * (num2.charCodeAt(num2.length - j) - code0);
            if (digLen < (i + j - 1)) {
                digits.unshift(product);
            } else {
                digits[digLen - (i + j - 1)] += product;
            }
        }
    }

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] > 9) {
            let carry = 0;
            carry = Math.floor(digits[i] / 10);
            digits[i] %= 10;
            if (i - 1 >= 0) {
                digits[i - 1] += carry;
            } else {
                digits.unshift(carry);
            }
        }
    }
    while (digits[0] > 9) {
        let carry = Math.floor(digits[0] / 10);
        digits[0] %= 10;
        digits.unshift(carry);
    }
    return digits.join("")
};