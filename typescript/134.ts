function canCompleteCircuit(gas: number[], cost: number[]): number {
    let maxGas = -Infinity;
    let gasBalance = 0;
    let maxGasIndex = -1;
    for (let i = gas.length - 1; i >= 0; i--) {
        const balance = gas[i] - cost[i];
        gasBalance += balance;
        if (gasBalance > maxGas) {
            maxGasIndex = i;
            maxGas = gasBalance;
        }
    }
    return gasBalance < 0 ? -1 : maxGasIndex;
};