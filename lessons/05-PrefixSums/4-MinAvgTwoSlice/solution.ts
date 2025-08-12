function solution(A: number[]): number {
    const N = A.length;
    let minAvg = Number.MAX_VALUE;
    let minIndex = 0;

    // Check slices of length 2
    for (let i = 0; i < N - 1; i++) {
        const currentAvg = (A[i] + A[i + 1]) / 2;
        if (currentAvg < minAvg) {
            minAvg = currentAvg;
            minIndex = i;
        }
    }

    // Check slices of length 3
    for (let i = 0; i < N - 2; i++) {
        const currentAvg = (A[i] + A[i + 1] + A[i + 2]) / 3;
        if (currentAvg < minAvg) {
            minAvg = currentAvg;
            minIndex = i;
        }
    }

    return minIndex;
}

