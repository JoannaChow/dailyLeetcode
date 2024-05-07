function predictPartyVictory(senate: string): string {
    const Rqueue: number[] = [];
    const Dqueue: number[] = [];
    const queue: number[] = [];
    senate.split("").forEach((s, index) => {
        queue.push(index);
        if (s === "R") {
            Rqueue.push(index);
        } else {
            Dqueue.push(index);
        }
    });
    while (Rqueue.length && Dqueue.length) {
        while (queue[0] === -1) queue.shift();
        let popIndex = -1;

        if (Rqueue[0] === queue[0]) {
            const rIndex = Rqueue.shift() as number;
            Rqueue.push(rIndex);
            popIndex = Dqueue.shift() as number;
        } else {
            const dIndex = Dqueue.shift() as number;
            Dqueue.push(dIndex);
            popIndex = Rqueue.shift() as number;
        }

        const qIndex = queue.shift() as number;
        queue.push(qIndex);
        queue.forEach((i, index) => {
            if (i === popIndex) {
                queue[index] = -1;
            }
        });
    } console.log(queue)
    return Rqueue.length ? "Radiant" : "Dire";
}
