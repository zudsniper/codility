function solution(A: number[]): number {
    const N = A.length;

    if (N < 3) {
        return 0; // A triangle requires at least 3 elements
    }

    A.sort((a, b) => a - b);

    for (let i = 0; i < N - 2; i++) {
        // Check for overflow before addition
        // If A[i] + A[i+1] > A[i+2] then it's a triangle
        // We need to be careful with large numbers, so check if A[i] > A[i+2] - A[i+1]
        // This avoids potential overflow if A[i] and A[i+1] are very large
        if (A[i] >= 0 && A[i] > A[i + 2] - A[i + 1]) {
            return 1; // Found a triangular triplet
        }
    }

    return 0; // No triangular triplet found
}

