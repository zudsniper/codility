function solution(N: number): number {
    let maxGap = 0;
    let currentGap = 0;
    let inGap = false;

    // Skip trailing zeros
    while (N > 0 && (N & 1) === 0) {
        N >>= 1;
    }

    while (N > 0) {
        if ((N & 1) === 1) { // Found a '1'
            if (inGap) {
                maxGap = Math.max(maxGap, currentGap);
                currentGap = 0;
            }
            inGap = true;
        } else { // Found a '0'
            if (inGap) {
                currentGap++;
            }
        }
        N >>= 1;
    }

    return maxGap;
}

