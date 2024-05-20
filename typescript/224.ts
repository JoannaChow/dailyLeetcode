function calculate(s: string): number {
    const queue: string[] = [];
    const operator: string[] = ["+", "-"];

    s.split("").forEach((c) => {
        if (!isNaN(parseInt(c))) {
            let curNum = 0;
            if (!isNaN(parseInt(queue[queue.length - 1]))) {
                curNum = 10 * parseInt(queue.pop() as string) + parseInt(c);
            } else {
                curNum = parseInt(c);
            }
            queue.push(curNum.toString());
        } else {
            const validChars = ["(", ")", "+", "-"];
            if (validChars.includes(c)) {
                if (operator.includes(c) || c === "(") {
                    queue.push(c);
                } else {
                    // c === ")"
                    const rightQueue: string[] = [];
                    let last = queue.pop() as string;
                    while (last !== "(") {
                        rightQueue.unshift(last);
                        last = queue.pop() as string;
                    }
                    const val = reduce(rightQueue);
                    queue.push(val.toString());
                }
            }
        }
    });
    if (queue.length > 1) {
        let val = reduce(queue);
        return val;
    } else {
        return parseInt(queue.pop() as string);
    }

    function reduce(q: string[]): number {
        let val = 0;
        while (q.length) {
            if (!isNaN(parseInt(q[0]))) {
                val += parseInt(q.shift() as string);
            } else if (q[0] === "+") {
                q.shift();
                const next = q.shift() as string;
                val += parseInt(next);
            } else {
                q.shift();
                const next = q.shift() as string;
                val -= parseInt(next);
            }
        }
        return val;
    }
}
