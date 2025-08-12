function solution(A: number[]): number {
    const N = A.length;
    if (N === 0) {
        return 0;
    }

    let maxEndingHere = A[0];
    let maxSoFar = A[0];

    for (let i = 1; i < N; i++) {
        maxEndingHere = Math.max(A[i], maxEndingHere + A[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

