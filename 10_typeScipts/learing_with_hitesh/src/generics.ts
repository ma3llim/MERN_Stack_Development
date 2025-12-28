function wrapInArray<T>(item: T): T[] {
    return [item];
}

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b];
}

interface Box<T> {
    content: T;
}

const numberBox: Box<number> = { content: 10 };
