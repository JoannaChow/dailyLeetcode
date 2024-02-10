function isIsomorphic(s: string, t: string): boolean {
    if (s.length != t.length) return false;

    const sHash = new Map(), tHash = new Map();
    let charCodeIndex = 0;
    for (let i = 0; i < s.length; i++) {
        if (sHash.get(s[i]) !== tHash.get(t[i])) {
            return false;
        }

        if (!sHash.get(s[i])) {
            sHash.set(s[i], "a".charCodeAt(0) + charCodeIndex);
            tHash.set(t[i], "a".charCodeAt(0) + charCodeIndex);
            charCodeIndex++;
        }
    }
    return true;
};