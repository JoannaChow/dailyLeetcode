export class Solution {
    /**
     * @param n: An integer
     * @param edges: a list of undirected edges
     * @return: true if it's a valid tree, or false
     */
    validTree(n: number, edges: number[][]): boolean {
        // write your code here
        const adj: Record<number, number[]> = {};
        for (let [n1, n2] of edges) {
            if (adj[n1] === undefined) {
                adj[n1] = [];
            }
            adj[n1].push(n2);
            if (adj[n2] === undefined) {
                adj[n2] = [];
            }
            adj[n2].push(n1);
        }

        const visited: Set<number> = new Set();
        function dfs(node: number, fromNode: number) {
            visited.add(node);
            if (adj[node] === undefined) {
                return true;
            }
            for (let connectedNode of adj[node]) {
                if (connectedNode !== fromNode) {
                    if (visited.has(connectedNode)) {
                        return false;
                    }
                    if (!dfs(connectedNode, node)) {
                        return false;
                    }
                }
            }
            return true;
        }

        return (dfs(0, -1) && visited.size === n);
    }
}