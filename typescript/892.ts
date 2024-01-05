export class Solution {
    /**
     * @param words: a list of words
     * @return: a string which is correct order
     */
    alienOrder(words: string[]): string {
        // Write your code here
        const adj: Record<string, string[]> = {};
        for (let i = 0; i < words.length - 1; i++) {
            const w1 = words[i], w2 = words[i + 1];
            const minLen = Math.min(w1.length, w2.length);
            if (w1.length > w2.length && w1.substring(0, minLen) === w2.substring(0, minLen)) {
                return "";
            }
            for (let j = 0; j < minLen; j++) {
                if (w1[j] !== w2[j]) {
                    if (adj[w1[j]] === undefined) adj[w1[j]] = [];
                    adj[w1[j]].push(w2[j]);
                    break;
                }
            }
        }

        const visited: Map<string, boolean> = new Map();
        const res: string[] = [];

        function dfs(c: string) {
            if (visited.has(c)) {
                return visited.get(c);
            }

            visited.set(c, true);
            for (let neighbour of (adj[c] ?? [])) {
                if (dfs(neighbour)) {
                    return true;
                }
            }
            visited.set(c, false);
            res.push(c);
        }

        for (let c in adj) {
            if (dfs(c)) {
                return ""
            }
        }
        return res.reverse().join("");
    }
} 