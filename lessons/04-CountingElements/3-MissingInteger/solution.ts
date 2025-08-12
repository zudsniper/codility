function solution(A: number[]): number {
    const seen = new Set<number>();

    // Add all positive numbers from A to the set
    for (const num of A) {
        if (num > 0) {
            seen.add(num);
        }
    }

    // Iterate from 1 upwards and find the first missing positive integer
    let i = 1;
    while (seen.has(i)) {
        i++;
    }

    return i;
}

