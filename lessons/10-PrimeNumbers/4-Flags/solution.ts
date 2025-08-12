function solution(A: number[]): number {
    const N = A.length;

    // 1. Find all peaks
    const peaks: number[] = [];
    for (let i = 1; i < N - 1; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }

    const numPeaks = peaks.length;
    if (numPeaks < 2) {
        return numPeaks; // If 0 or 1 peak, we can place at most that many flags
    }

    // 2. Binary search for the maximum number of flags
    let maxFlags = 0;
    let low = 1;
    let high = numPeaks;

    while (low <= high) {
        const currentFlags = Math.floor((low + high) / 2);
        let flagsPlaced = 0;
        let lastPeakIndex = -currentFlags; // Initialize to allow placing first flag at index 0

        for (let i = 0; i < numPeaks; i++) {
            if (peaks[i] >= lastPeakIndex + currentFlags) {
                flagsPlaced++;
                lastPeakIndex = peaks[i];
            }
        }

        if (flagsPlaced >= currentFlags) {
            maxFlags = currentFlags;
            low = currentFlags + 1;
        } else {
            high = currentFlags - 1;
        }
    }

    return maxFlags;
}

