function partitionLabels(s: string): number[] {
    const hash: Record<string, number> = {};
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        hash[char] = i;
    }

    const output: number[] = [];
    let size = 1, end = hash[s[0]], index = 0;

    while (end < s.length && index <= end) {
        if (index === end) {
            output.push(size);
            index++;
            end = hash[s[index]];
            size = 1;
            continue;
        }
        end = Math.max(end, hash[s[index]]);
        size++;
        index++;
    }

    return output;
};