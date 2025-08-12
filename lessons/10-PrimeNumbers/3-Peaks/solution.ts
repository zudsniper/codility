function solution(A: number[]): number {
    const N = A.length;
    if (N < 3) {
        return 0; // Not enough elements to form a peak
    }

    const peaks: number[] = [];
    for (let i = 1; i < N - 1; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }

    if (peaks.length === 0) {
        return 0; // No peaks found
    }

    // Iterate through possible number of blocks, from max possible (number of peaks) down to 1
    for (let numBlocks = peaks.length; numBlocks >= 1; numBlocks--) {
        if (N % numBlocks === 0) {
            const blockSize = N / numBlocks;
            let currentBlock = 0;
            let foundPeaksInAllBlocks = true;

            // Check if each block contains at least one peak
            for (let i = 0; i < numBlocks; i++) {
                const blockStart = i * blockSize;
                const blockEnd = (i + 1) * blockSize - 1;

                let peakFoundInCurrentBlock = false;
                // Check if any peak falls within the current block
                while (currentBlock < peaks.length && peaks[currentBlock] <= blockEnd) {
                    if (peaks[currentBlock] >= blockStart) {
                        peakFoundInCurrentBlock = true;
                        break;
                    }
                    currentBlock++;
                }

                if (!peakFoundInCurrentBlock) {
                    foundPeaksInAllBlocks = false;
                    break;
                }
            }

            if (foundPeaksInAllBlocks) {
                return numBlocks;
            }
        }
    }

    return 0;
}

