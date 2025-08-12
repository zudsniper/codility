function solution(A: number[]): number {
    const N = A.length;
    if (N < 3) {
        return 0;
    }

    A.sort((a, b) => a - b);

    let triangleCount = 0;

    for (let p = 0; p < N - 2; p++) {
        let r = p + 2;
        for (let q = p + 1; q < N - 1; q++) {
            // Find the largest r such that A[p] + A[q] > A[r]
            // Since the array is sorted, if A[p] + A[q] > A[r], then
            // A[p] + A[q] > A[r-1], A[p] + A[q] > A[r-2], etc.
            // So, all elements from q+1 to r-1 will form a triangle with A[p] and A[q]
            while (r < N && A[p] + A[q] > A[r]) {
                r++;
            }
            // The number of valid R values for the current P and Q is (r - 1) - (q + 1) + 1 = r - q - 1
            triangleCount += (r - q - 1);
        }
    }

    return triangleCount;
}

