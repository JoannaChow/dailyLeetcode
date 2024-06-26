function minFlipsMonoIncr(s: string): number {
    let ones = 0;
    let flips = 0;
    for(let i=1;i<s.length;i++){
        if(s[i] === "0") flips = Math.min(flips+1, ones);
        else ones++;
    }
    return flips;
}
