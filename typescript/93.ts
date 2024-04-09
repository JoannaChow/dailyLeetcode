function restoreIpAddresses(s: string): string[] {
    const result: string[] = [];
    if (s.length > 12) return result;
    function backtracking(i: number, dots: number, currentIP: string) {
        if (dots === 4 && i === s.length) {
            result.push(currentIP.slice(0, currentIP.length - 1));
            return;
        } else if (dots > 4) {
            return;
        } else {
            for (let j = i; j < Math.min(i + 3, s.length); j++) {
                if (
                    parseInt(s.slice(i, j + 1)) < 256 &&
                    (i === j || s[i] !== "0")
                ) {
                    backtracking(
                        j + 1,
                        dots + 1,
                        currentIP + s.slice(i, j + 1) + "."
                    );
                }
            }
        }
    }
    backtracking(0, 0, "");
    return result;
}
/*
function restoreIpAddresses(s: string): string[] {
    function backtracking(start: number): string[][] {
        const ret: string[][] = [];
        if (start === s.length) {
            return [];
        }
        if (s.charAt(start) === "0") {
            const arr = backtracking(start + 1);
            if (arr.length === 0 && start + 1 !== s.length) {
                return [];
            }
            let temp =
                arr.length > 0
                    ? arr.map((e) => {
                          e.unshift(s.charAt(start));
                          return e;
                      })
                    : [[s.charAt(start)]];
            if (start === 0) temp = temp.filter((e) => e.length === 4);
            ret.push(...temp);
        } else {
            for (let i = 1; i <= 3 && start + i <= s.length; i++) {
                const intVal = parseInt(s.slice(start, start + i));
                if (intVal > 255) break;
                const arr = backtracking(start + i);
                if (arr.length === 0 && start + i !== s.length) continue;
                let temp =
                    arr.length > 0
                        ? arr.map((e) => {
                              e.unshift(s.slice(start, start + i));
                              return e;
                          })
                        : [[s.slice(start, start + i)]];
                if (start === 0) temp = temp.filter((e) => e.length === 4);
                ret.push(...temp);
            }
        }
        return ret;
    }
    const temp = backtracking(0);
    return temp.map((e) => e.join("."));
}
*/
