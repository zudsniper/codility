function solution(A: number[]): number {
    const N = A.length;
    if (N === 0) {
        return 0;
    }

    let left = 0;
    let right = N - 1;
    let distinctCount = 0;

    // Use a Set to keep track of distinct absolute values encountered
    // This simplifies handling duplicates and ensures correctness
    const seenAbsValues = new Set<number>();

    while (left <= right) {
        const absLeft = Math.abs(A[left]);
        const absRight = Math.abs(A[right]);

        if (absLeft > absRight) {
            seenAbsValues.add(absLeft);
            left++;
        } else if (absRight > absLeft) {
            seenAbsValues.add(absRight);
            right--;
        } else {
            // absLeft === absRight
            seenAbsValues.add(absLeft);
            left++;
            right--;
        }
    }

    return seenAbsValues.size;
}

