function mergeTriplets(triplets: number[][], target: number[]): boolean {
    const availableTriplets: Set<number> = new Set(); //each row is for each integer
    for (let i = 0; i < triplets.length; i++) {
        const [a, b, c] = triplets[i];
        if (a > target[0] || b > target[1] || c > target[2]) continue;
        if (a === target[0]) {
            availableTriplets.add(1);
        }
        if (b === target[1]) {
            availableTriplets.add(2);
        }
        if (c === target[2]) {
            availableTriplets.add(3);
        }
    }

    return availableTriplets.size === 3;
};