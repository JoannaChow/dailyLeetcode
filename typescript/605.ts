function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    for (let i = 0; i < flowerbed.length && n > 0; i++) {
        if ((i - 1 < 0 || flowerbed[i - 1] === 0) &&
            flowerbed[i] === 0 &&
            (i + 1 === flowerbed.length || flowerbed[i + 1] === 0)) {
            flowerbed[i] = 1;
            i++;
            n--;
        }
    }
    return n === 0;
};