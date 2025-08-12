function solution(A: number[]): number {
    const N = A.length;
    const seen = new Set<number>();
    let sum = 0;
    let expectedSum = 0;

    for (let i = 0; i < N; i++) {
        if (seen.has(A[i])) {
            return 0; // Duplicate found, not a permutation
        }
        seen.add(A[i]);
        sum += A[i];
        expectedSum += (i + 1);
    }

    // Check if all numbers from 1 to N are present and no duplicates
    // The sum check implicitly verifies if all numbers are within the range [1, N]
    // and if no numbers are missing or duplicated (since duplicates are already caught)
    if (sum === expectedSum && seen.size === N) {
        return 1; // Is a permutation
    } else {
        return 0; // Not a permutation
    }
}

