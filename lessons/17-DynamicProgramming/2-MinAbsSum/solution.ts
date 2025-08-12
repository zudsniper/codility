function solution(A: number[]): number {
    const N = A.length;
    if (N === 0) {
        return 0;
    }

    let sum = 0;
    let maxVal = 0;
    const counts: number[] = new Array(101).fill(0); // Max value of A[i] is 100

    for (let i = 0; i < N; i++) {
        const absVal = Math.abs(A[i]);
        sum += absVal;
        maxVal = Math.max(maxVal, absVal);
        counts[absVal]++;
    }

    // dp[s] is true if sum 's' can be formed using a subset of elements
    const dp: boolean[] = new Array(sum + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= maxVal; i++) {
        if (counts[i] > 0) {
            for (let s = 0; s <= sum; s++) {
                if (dp[s]) {
                    // If s is reachable, then s + i, s + 2*i, ..., s + counts[i]*i are also reachable
                    for (let k = 1; k <= counts[i]; k++) {
                        if (s + k * i <= sum) {
                            dp[s + k * i] = true;
                        }
                    }
                }
            }
        }
    }

    let minAbsSum = sum;
    for (let s = 0; s <= sum / 2; s++) {
        if (dp[s]) {
            minAbsSum = Math.min(minAbsSum, sum - 2 * s);
        }
    }

    return minAbsSum;
}

