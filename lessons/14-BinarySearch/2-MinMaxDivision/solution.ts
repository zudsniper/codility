function solution(K: number, M: number, A: number[]): number {
    const N = A.length;

    // Helper function to check if it's possible to divide the array into at most K blocks
    // such that the sum of elements in each block does not exceed maxBlockSum.
    function check(maxBlockSum: number): boolean {
        let currentBlockSum = 0;
        let numBlocks = 1;

        for (let i = 0; i < N; i++) {
            if (A[i] > maxBlockSum) {
                return false; // An element itself is greater than maxBlockSum
            }
            if (currentBlockSum + A[i] > maxBlockSum) {
                numBlocks++;
                currentBlockSum = A[i];
            } else {
                currentBlockSum += A[i];
            }
            if (numBlocks > K) {
                return false; // Exceeded the allowed number of blocks
            }
        }
        return true;
    }

    // Binary search for the minimum possible maximum sum
    let minPossibleSum = Math.max(...A); // The smallest possible maximum sum is the largest element itself
    let maxPossibleSum = A.reduce((sum, val) => sum + val, 0); // The largest possible maximum sum is the sum of all elements
    let result = maxPossibleSum; // Initialize result with the largest possible sum

    while (minPossibleSum <= maxPossibleSum) {
        const midSum = Math.floor((minPossibleSum + maxPossibleSum) / 2);
        if (check(midSum)) {
            result = midSum;
            maxPossibleSum = midSum - 1; // Try to find an even smaller maximum sum
        } else {
            minPossibleSum = midSum + 1; // midSum is too small, need a larger sum
        }
    }

    return result;
}

