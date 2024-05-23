function findAnagrams(s: string, p: string): number[] {
    const keyCount = Array(26).fill(0);
    const matchedKey = keyCount.join("#");
    const aCharCode = "a".charCodeAt(0);

    p.split("").forEach(
        (char, index) => keyCount[p.charCodeAt(index) - aCharCode]++
    );
    const pLen = p.length;
    const result: number[] = [];
    for (let i = 0; i < s.length; i++) {
        keyCount[s.charCodeAt(i) - aCharCode]--;
        if (i + 1 > pLen) {
            keyCount[s.charCodeAt(i - pLen) - aCharCode]++;
        }
        if (i + 1 >= pLen) {
            const key = keyCount.join("#");
            if (key === matchedKey) result.push(i + 1 - pLen);
        }
    }
    return result;
}
