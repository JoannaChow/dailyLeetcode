function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const hash: Record<number, number[]> = {};
    for (let prer of prerequisites) {
        if (hash[prer[0]] === undefined) {
            hash[prer[0]] = [];
        }
        hash[prer[0]].push(prer[1]);
    }
    const visitSet: Set<number> = new Set();
    function dfs(course: number) {
        if (hash[course] === undefined || hash[course].length === 0) {
            return true;
        }
        const hashList = hash[course];
        for (let prerequisite of hashList) {
            if (visitSet.has(prerequisite)) {
                return false;
            }
            visitSet.add(prerequisite);
            if (!dfs(prerequisite)) return false;
            hash[course].shift();
            visitSet.delete(prerequisite);
        }
        return true;
    }
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false;
        }
    }
    return true;
};