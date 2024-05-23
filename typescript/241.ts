// dfs + memo
function diffWaysToCompute(expression: string): number[] {
    const table: Map<string, number[]> = new Map();
    const operators = ["+", "-", "*"];
    return dfs(expression);

    function dfs(exp: string): number[] {
        if (table.has(exp)) return table.get(exp) as number[];
        const result: number[] = [];

        for (let i = 0; i < exp.length; i++) {
            if (operators.includes(exp[i])) {
                const left = dfs(exp.slice(0, i));
                const right = dfs(exp.slice(i + 1));
                for (let leftVal of left) {
                    for (let rightVal of right) {
                        let val = 0;
                        switch (exp[i]) {
                            case "+":
                                val = leftVal + rightVal;
                                break;
                            case "-":
                                val = leftVal - rightVal;
                                break;
                            case "*":
                                val = leftVal * rightVal;
                                break;
                        }
                        result.push(val);
                    }
                }
            }
        }

        if (result.length === 0) {
            result.push(parseInt(exp));
        }

        table.set(exp, result);
        return result;
    }
}

// divide conqure, o(n^2) in time
/*
function diffWaysToCompute(expression: string): number[] {
    const operators = ["+", "-", "*"];
    const result: number[] = [];
    for (let i = 0; i < expression.length; i++) {
        if (operators.includes(expression[i])) {
            const left = diffWaysToCompute(expression.slice(0, i));
            const right = diffWaysToCompute(expression.slice(i + 1));
            for (const leftVal of left) {
                for (const rightVal of right) {
                    let val = 0;
                    switch (expression[i]) {
                        case "+":
                            val = leftVal + rightVal;
                            break;
                        case "-":
                            val = leftVal - rightVal;
                            break;
                        case "*":
                            val = leftVal * rightVal;
                            break;
                    }
                    result.push(val);
                }
            }
        }
    }
    if (result.length === 0) {
        result.push(parseInt(expression));
    }
    return result;
}
*/
