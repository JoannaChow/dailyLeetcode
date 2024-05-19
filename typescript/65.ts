function isNumber(s: string): boolean {
    const dfa: { [key: string]: number }[] = [
        { digit: 1, sign: 2, dot: 3 },
        { digit: 1, dot: 4, exponent: 5 },
        { digit: 1, dot: 3 },
        { digit: 4 },
        { digit: 4, exponent: 5 },
        { sign: 6, digit: 7 },
        { digit: 7 },
        { digit: 7 },
    ];
    let current_state = 0;
    let group: string;
    for (const c of s) {
        if (!isNaN(parseInt(c))) {
            group = "digit";
        } else if (c === "+" || c === "-") {
            group = "sign";
        } else if (c === ".") {
            group = "dot";
        } else if (c === "e" || c === "E") {
            group = "exponent";
        } else {
            return false;
        }
        if (!dfa[current_state][group]) {
            return false;
        }
        current_state = dfa[current_state][group];
    }
    return [1, 4, 7].includes(current_state);
}
/** approach 1
function isNumber(s: string): boolean {
    let seenDigit: boolean = false;
    let seenExponent: boolean = false;
    let seenDot: boolean = false;
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if (!isNaN(parseInt(curr))) {
            seenDigit = true;
        } else if (curr === "+" || curr === "-") {
            if (i > 0 && s[i - 1] !== "e" && s[i - 1] !== "E") {
                return false;
            }
        } else if (curr === "e" || curr === "E") {
            if (seenExponent || !seenDigit) {
                return false;
            }
            seenExponent = true;
            seenDigit = false;
        } else if (curr === ".") {
            if (seenDot || seenExponent) {
                return false;
            }
            seenDot = true;
        } else {
            return false;
        }
    }
    return seenDigit;
}
*/
