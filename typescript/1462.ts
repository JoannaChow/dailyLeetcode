function checkIfPrerequisite(
    numCourses: number,
    prerequisites: number[][],
    queries: number[][]
): boolean[] {
    const neighbours: Map<number, number[]> = new Map();
    for (let [a, b] of prerequisites) {
        if (neighbours.get(a)) {
            neighbours.get(a)?.push(b);
        } else {
            neighbours.set(a, [b]);
        }
    }
    const answers: boolean[] = [];
    let path: number[] = Array(numCourses).fill(-1);
    for (let [a, b] of queries) {
        path[a] = a;
        answers.push(dfs(a, b));
        path = Array(numCourses).fill(-1);
    }
    return answers;
    function dfs(i: number, target: number) {
        for (let next of (neighbours.get(i) ?? [])) {
            if (next === target) return true;

            if (path[next] === -1) {
                path[next] = next;
                if (dfs(next, target)) return true;
            }
        }
        return false;
    }
}
