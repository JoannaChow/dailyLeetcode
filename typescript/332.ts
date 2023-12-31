function findItinerary(tickets: string[][]): string[] {
    const hash: Map<string, string[]> = new Map();
    for (let [from, to] of tickets) {
        if (!hash.has(from)) {
            hash.set(from, []);
        }
        hash.get(from)?.push(to);
    }
    hash.forEach((tickets) => tickets.sort());

    const res: string[] = [];
    function dfs(from: string) {
        const remainingTickets = hash.get(from);
        while (remainingTickets && remainingTickets.length > 0) {
            const next = remainingTickets.shift() as string;
            dfs(next);
        }
        res.unshift(from);
    }

    const startFrom = "JFK";
    dfs(startFrom);
    return res;
};