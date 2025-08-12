function solution(A: number[], B: number[]): number {
    const N = A.length;

    if (N === 0) {
        return 0; // No segments, so 0 non-overlapping segments
    }

    let count = 1; // At least one segment (the first one) will always be selected
    let lastEnd = B[0]; // The end point of the last selected segment

    // Iterate through the segments starting from the second one
    for (let i = 1; i < N; i++) {
        // If the current segment's start point is greater than the last selected segment's end point,
        // it means they do not overlap, and we can select this segment.
        if (A[i] > lastEnd) {
            count++;
            lastEnd = B[i]; // Update the end point of the last selected segment
        }
    }

    return count;
}

