function solution(A: number[]): number {
    const N = A.length;

    // dp[i] will store the maximum score to reach index i
    const dp: number[] = new Array(N).fill(-Infinity);

    // The score to reach the first element is just its value
    dp[0] = A[0];

    // Iterate through the array from the second element
    for (let i = 1; i < N; i++) {
        // For each position i, consider all possible previous positions
        // from which we could have jumped (i-1, i-2, ..., i-6)
        for (let dieRoll = 1; dieRoll <= 6; dieRoll++) {
            const prevIndex = i - dieRoll;
            if (prevIndex >= 0) {
                // Update dp[i] with the maximum score found so far
                dp[i] = Math.max(dp[i], dp[prevIndex] + A[i]);
            }
        }
    }

    // The result is the maximum score to reach the last element
    return dp[N - 1];
}

