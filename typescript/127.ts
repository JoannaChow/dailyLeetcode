function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    if (!wordList.includes(endWord)) {
        return 0;
    }

    if (!wordList.includes(beginWord)) {
        wordList.push(beginWord);
    }

    const adj: Map<string, string[]> = new Map();
    for (let word of wordList) {
        checkAdjPattern(word);
    }

    const visited: Set<string> = new Set();
    let queue: string[] = [beginWord];

    function bfs(): number {
        let numOfWords = 0;
        while (queue.length) {
            numOfWords++;
            const nextQueue: string[] = [];
            for (let word of queue) {
                if (word === endWord) {
                    return numOfWords;
                }

                visited.add(word);
                for (let i = 0; i < word.length; i++) {
                    const pattern = `${word.slice(0, i)}.${word.slice(i + 1)}`;
                    for (let patternWord of adj.get(pattern) as string[]) {
                        if (!visited.has(patternWord)) {
                            nextQueue.push(patternWord);
                        }
                    }
                }
            }
            queue = nextQueue;
        }
        return 0;
    }
    return bfs();

    function checkAdjPattern(word: string) {
        for (let i = 0; i < word.length; i++) {
            const pattern = `${word.slice(0, i)}.${word.slice(i + 1)}`;
            if (adj.has(pattern)) {
                adj.get(pattern)?.push(word);
            } else {
                adj.set(pattern, [word])
            }
        }
    }
};