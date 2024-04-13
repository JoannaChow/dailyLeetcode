function isAlienSorted(words: string[], order: string): boolean {
    for (let i = 0; i + 1 < words.length; i++) {
        if (!isSorted(words[i], words[i + 1])) return false;
    }
    return true;
    function isSorted(word1: string, word2: string): boolean {
        for (let i = 0; i < word1.length; i++) {
            if (i >= word2.length) return false;

            if (order.indexOf(word1[i]) > order.indexOf(word2[i])) return false;

            if (order.indexOf(word1[i]) < order.indexOf(word2[i])) return true;
        }
        return true;
    }
}
