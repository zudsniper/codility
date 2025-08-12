function solution(X: number, A: number[]): number {
    const coveredPositions = new Set<number>();
    let earliestTime = -1;

    for (let i = 0; i < A.length; i++) {
        const leafPosition = A[i];
        coveredPositions.add(leafPosition);

        // Check if all positions from 1 to X are covered
        if (coveredPositions.size === X) {
            earliestTime = i;
            break;
        }
    }

    return earliestTime;
}

