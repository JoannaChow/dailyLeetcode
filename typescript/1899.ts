function mergeTriplets(triplets: number[][], target: number[]): boolean {
    const availableTriplets: number[][] = [[], [], []]; //each row is for each integer
    for (let i = 0; i < triplets.length; i++) {
        const [a, b, c] = triplets[i];
        if (a === target[0] && b <= target[1] && c <= target[2]) {
            availableTriplets[0].push(i);
        }
        if (b === target[1] && a <= target[0] && c <= target[2]) {
            availableTriplets[1].push(i);
        }
        if (c === target[2] && b <= target[1] && a <= target[0]) {
            availableTriplets[2].push(i);
        }
    }
    if (availableTriplets[0].length === 0 || availableTriplets[1].length === 0 || availableTriplets[2].length === 0) {
        return false;
    }
    return true;
};