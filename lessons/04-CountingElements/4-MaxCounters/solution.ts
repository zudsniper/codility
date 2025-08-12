function solution(N: number, A: number[]): number[] {
    const counters: number[] = new Array(N).fill(0);
    let maxCounter = 0;
    let lastMaxUpdate = 0;

    for (let i = 0; i < A.length; i++) {
        const operation = A[i];

        if (operation >= 1 && operation <= N) {
            // Increase operation
            const index = operation - 1;
            if (counters[index] < lastMaxUpdate) {
                counters[index] = lastMaxUpdate;
            }
            counters[index]++;
            if (counters[index] > maxCounter) {
                maxCounter = counters[index];
            }
        } else if (operation === N + 1) {
            // Max counter operation
            lastMaxUpdate = maxCounter;
        }
    }

    // Apply the lastMaxUpdate to all counters that are less than it
    for (let i = 0; i < N; i++) {
        if (counters[i] < lastMaxUpdate) {
            counters[i] = lastMaxUpdate;
        }
    }

    return counters;
}

