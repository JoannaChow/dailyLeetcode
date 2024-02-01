function getMinimumOperations(s: string): number {
    let count = 0;
    for (let i = 0, j = s.length - 1; i < s.length && j >= 0; i++, j--) {
        if (s[i] === s[j]) {
            count++;
        } else {
            j++;
        }
    }
    return s.length - count;
}

console.log(getMinimumOperations("00110101"), `expect to be 3`);
console.log(getMinimumOperations("101011"), `expect to be 2`);