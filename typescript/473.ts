function makesquare(matchsticks: number[]): boolean {
    const totalLength = matchsticks.reduce((a, b) => a + b);
    if (totalLength % 4) return false;

    const sideLength = totalLength / 4;
    let sides = [0, 0, 0, 0];
    matchsticks.sort((a, b) => b - a);
    function backtrack(i: number) {
        if (i === matchsticks.length) {
            return true;
        }

        for (let j = 0; j < 4; j++) {
            if (matchsticks[i] + sides[j] <= sideLength) {
                sides[j] += matchsticks[i];
                if (backtrack(i + 1)) {
                    return true;
                }
                sides[j] -= matchsticks[i];
            }
        }
        return false;
    }
    return backtrack(0);
}
