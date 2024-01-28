class TrieNode {
    children: Map<string, TrieNode | null>;
    isEndOfWord: boolean;
    constructor(child?: string, isEndOfWord?: boolean) {
        this.children = (child === undefined ? new Map() : new Map([[child, null]]));
        this.isEndOfWord = (isEndOfWord === undefined ? false : isEndOfWord);
    }
}

function minExtraChar(s: string, dictionary: string[]): number {
    const trieRoot = new TrieNode();
    for (let word of dictionary) {
        let node = trieRoot;
        word.split("").forEach((c) => {
            if (!node.children.get(c)) {
                node.children.set(c, new TrieNode(c));
            }
            node = node.children.get(c) as TrieNode;
        });
        node.isEndOfWord = true;
    }

    const dp: number[] = Array(s.length + 1).fill(Infinity);
    dp[s.length] = 0;
    function search(index: number): number {
        if (dp[index] !== Infinity) return dp[index];

        let countExtra = 1 + search(index + 1); // skip curr char
        let curIndex = index;
        let node = trieRoot;
        while (curIndex < s.length) {
            if (!node.children.get(s[curIndex])) {
                break;
            }
            if (node.children.get(s[curIndex])?.isEndOfWord) {
                countExtra = Math.min(countExtra, search(curIndex + 1));
            }
            node = node.children.get(s[curIndex]) as TrieNode;
            curIndex++;
        }
        dp[index] = countExtra;
        return countExtra;
    }
    return search(0);
};