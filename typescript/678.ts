function checkValidString(s: string): boolean {
    let leftMin = 0, leftMax = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            leftMin++;
            leftMax++;
        } else if (s[i] === ")") {
            leftMin--;
            leftMax--;
        } else {
            leftMin--;
            leftMax++;
        }
        if (leftMax < 0) {
            return false;
        }
        if (leftMin < 0) {
            leftMin = 0
        }
    }

    return leftMin === 0;
};