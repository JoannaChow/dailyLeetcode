function isNStraightHand(hand: number[], groupSize: number): boolean {
    if (hand.length % groupSize !== 0) return false;

    hand.sort((a, b) => a - b);
    const groups: number[][] = [];
    for (let i = 0; i < hand.length; i++) {
        let inserted = false;
        for (let j = 0; j < groups.length; j++) {
            if (groups[j].length < groupSize && groups[j][groups[j].length - 1] === hand[i] - 1) {
                groups[j].push(hand[i]);
                inserted = true;
                break;
            }
        }
        if (!inserted) groups.push([hand[i]]);
    }
    while (groups.length > 0) {
        if (groups[0].length === groupSize) groups.shift();
        else break;
    }
    return groups.length === 0;
};