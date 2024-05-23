function groupAnagrams(strs: string[]): string[][] {
    const map: Map<string, string[]> = new Map();
    strs.forEach((str) => {
        const keyCount = Array(26).fill(0);
        const aCharCode = "a".charCodeAt(0);
        str.split("").forEach(
            (char, index) => keyCount[str.charCodeAt(index) - aCharCode]++
        );
        const key = keyCount.join("#");
        if (!map.has(key)) map.set(key, [str]);
        else {
            const group = map.get(key) as string[];
            group.push(str);
        }
    });

    return Array.from(map.values());
}
