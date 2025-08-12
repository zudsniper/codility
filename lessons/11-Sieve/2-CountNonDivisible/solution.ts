function solution(A: number[]): number[] {
    const N = A.length;
    const maxVal = Math.max(...A);

    // Count occurrences of each number in A
    const counts: number[] = new Array(maxVal + 1).fill(0);
    for (const num of A) {
        counts[num]++;
    }

    const result: number[] = new Array(N);

    for (let i = 0; i < N; i++) {
        const currentNum = A[i];
        let divisorsCount = 0;

        // Iterate through potential divisors up to sqrt(currentNum)
        for (let j = 1; j * j <= currentNum; j++) {
            if (currentNum % j === 0) {
                // j is a divisor
                divisorsCount += counts[j];

                // currentNum / j is also a divisor, if it's not j itself
                if (j * j !== currentNum) {
                    divisorsCount += counts[currentNum / j];
                }
            }
        }
        result[i] = N - divisorsCount;
    }

    return result;
}

