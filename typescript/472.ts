function findAllConcatenatedWordsInADict(words: string[]): string[] {
    const dictionary: Set<string> = new Set(words);
    const result: string[] = [];
    for (const word of words) {
        const visited = Array(word.length).fill(false);
        if (dfs(word, 0, visited)) {
            result.push(word);
        }
    }
    return result;
    
    function dfs(word: string, length: number, visited: boolean[]) {
        if (length === word.length) {
            return true;
        }
        if (visited[length]) {
            return false;
        }
        visited[length] = true;
        let end = word.length - (length === 0 ? 1 : 0);
        for (; end > length; end--) {
            if (
                dictionary.has(word.substring(length, end)) &&
                dfs(word, end, visited)
            ) {
                return true;
            }
        }
        return false;
    }
}
