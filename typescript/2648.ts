function* fibGenerator(): Generator<number, any, number> {
    let a = 0
    yield a;
    
    let b = a;
    a = 1;
    yield a;

    while(true) {
        const c = a + b;
        b = a;
        a = c;
        yield a;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */