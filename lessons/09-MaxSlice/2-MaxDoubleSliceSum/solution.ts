function solution(A: number[]): number {
    const N = A.length;

    if (N < 4) {
        return 0; // A double slice requires at least 4 elements (X, Y, Z with Y-X > 0 and Z-Y > 0)
    }

    // maxEndingHere[i] stores the maximum sum of a slice ending at index i
    // (excluding A[0] and A[N-1] as X and Z cannot be the first or last element)
    const maxEndingHereLeft: number[] = new Array(N).fill(0);
    const maxEndingHereRight: number[] = new Array(N).fill(0);

    // Calculate max sum ending at each position from left to right
    for (let i = 1; i < N - 1; i++) {
        maxEndingHereLeft[i] = Math.max(0, maxEndingHereLeft[i - 1] + A[i]);
    }

    // Calculate max sum ending at each position from right to left
    for (let i = N - 2; i >= 1; i--) {
        maxEndingHereRight[i] = Math.max(0, maxEndingHereRight[i + 1] + A[i]);
    }

    let maxDoubleSliceSum = 0;

    // Iterate through all possible Y values (from 1 to N-2)
    // The sum of a double slice (X, Y, Z) is maxEndingHereLeft[Y-1] + maxEndingHereRight[Y+1]
    for (let Y = 1; Y < N - 1; Y++) {
        maxDoubleSliceSum = Math.max(maxDoubleSliceSum, maxEndingHereLeft[Y - 1] + maxEndingHereRight[Y + 1]);
    }

    return maxDoubleSliceSum;
}

