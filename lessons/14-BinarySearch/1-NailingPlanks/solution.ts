function solution(A: number[], B: number[], C: number[]): number {
    const N = A.length; // Number of planks
    const M = C.length; // Number of nails

    // Helper function to check if all planks can be nailed with 'k' nails
    function check(k: number): boolean {
        // Create an array to mark the first occurrence of each nail position
        // The maximum possible coordinate for a nail is 2 * M (from problem constraints)
        // We need to store the index of the nail in the original C array
        const nailPositions: number[] = new Array(2 * M + 1).fill(-1);

        for (let i = 0; i < k; i++) {
            // Store the index 'i' of the nail in C, at its position C[i]
            // If multiple nails are at the same position, we only care about the first one encountered
            if (nailPositions[C[i]] === -1) {
                nailPositions[C[i]] = i;
            }
        }

        // Create a prefix sum array for nail occurrences
        // This will store the minimum index of a nail up to a certain position
        const minNailIndexPrefixSum: number[] = new Array(2 * M + 2).fill(Number.MAX_SAFE_INTEGER);
        for (let i = 1; i < minNailIndexPrefixSum.length; i++) {
            minNailIndexPrefixSum[i] = Math.min(minNailIndexPrefixSum[i - 1], nailPositions[i - 1] !== -1 ? nailPositions[i - 1] : Number.MAX_SAFE_INTEGER);
        }

        // Check each plank
        for (let i = 0; i < N; i++) {
            const plankStart = A[i];
            const plankEnd = B[i];

            // Find the minimum index of a nail that can nail this plank
            // This is the minimum of nail indices between plankStart and plankEnd
            const minNailForPlank = minNailIndexPrefixSum[plankEnd + 1];

            // If minNailForPlank is still MAX_SAFE_INTEGER, it means no nail was found for this plank
            // within the first 'k' nails, or the nail is outside the range [plankStart, plankEnd]
            if (minNailForPlank === Number.MAX_SAFE_INTEGER || minNailForPlank >= k) {
                return false; // This plank cannot be nailed with 'k' nails
            }
        }
        return true; // All planks can be nailed with 'k' nails
    }

    let minNails = -1;
    let low = 1;
    let high = M;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (check(mid)) {
            minNails = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return minNails;
}

