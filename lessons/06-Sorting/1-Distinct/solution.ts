function solution(A: number[]): number {
    if (A.length === 0) {
        return 0;
    }

    const uniqueElements = new Set<number>();
    for (const num of A) {
        uniqueElements.add(num);
    }

    return uniqueElements.size;
}

