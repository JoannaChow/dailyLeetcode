function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const hash: Record<number, number[]> = {};
    for (let prer of prerequisites) {
        if (hash[prer[0]] === undefined) {
            hash[prer[0]] = [];
        }
        hash[prer[0]].push(prer[1]);
    }
    const visitSet: Set<number> = new Set();
    const curPath: number[] = [];
    const res: number[] = [];
    function dfs(course: number) {
        if (hash[course] === undefined || hash[course].length === 0) {
            return true;
        }
        const hashList = hash[course];
        while (hashList.length) {
            const prerequisite = hashList[0];
            if (visitSet.has(prerequisite)) {
                return false;
            }
            visitSet.add(prerequisite);
            if (!dfs(prerequisite)) {
                return false;
            }
            curPath.push(prerequisite);
            hash[course].shift();
            visitSet.delete(prerequisite);
        }
        return true;
    }
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return [];
        }
        curPath.push(i);
        while (curPath.length) {
            if (res.indexOf(curPath[0]) === -1) {
                res.push(curPath[0]);
            }
            curPath.shift();
        }
    }
    return res;
};