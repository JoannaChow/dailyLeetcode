function minDeletions(s: string): number {
    const letterMap = {},
        frequencyMap = {};
    s.split("").forEach((c) => {
        if (!letterMap[c]) letterMap[c] = 1;
        else letterMap[c]++;
    });
    let min = 0;
    for (const char in letterMap) {
        while (frequencyMap[letterMap[char]]) {
            letterMap[char]--;
            min++;
        }
        frequencyMap[letterMap[char]] = char;
    }
    return min;
}
