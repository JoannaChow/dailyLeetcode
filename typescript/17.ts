function letterCombinations(digits: string): string[] {
    const DigitsHash: Record<string, string> = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };
    const res: string[] = [];
    function backtrack(index: number, combination: string) {
        console.log(index,combination,digits[index],DigitsHash[digits[index]])
        if (index <= digits.length - 1) {
            DigitsHash[digits[index]].split("").forEach(char => {
                if (index === digits.length - 1) {
                    res.push(combination + char);
                } else {
                    backtrack(index + 1, combination + char);
                }
            })
        }
    }
    backtrack(0, "");
    return res;
};