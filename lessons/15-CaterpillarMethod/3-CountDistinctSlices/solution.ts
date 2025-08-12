function solution(M: number, A: number[]): number {
    const N = A.length;
    const MAX_SLICES = 1000000000;

    let distinctSlices = 0;
    let back = 0;
    const seen = new Array(M + 1).fill(false); // To track elements in the current slice

    for (let front = 0; front < N; front++) {
        while (seen[A[front]]) {
            // If the current element A[front] is already in the slice (seen),
            // move the back pointer forward and remove elements from the 'seen' array
            // until A[front] is no longer a duplicate.
            seen[A[back]] = false;
            back++;
        }
        // Mark A[front] as seen
        seen[A[front]] = true;

        // Add all new distinct slices ending at 'front'
        // These are (back, front), (back+1, front), ..., (front, front)
        distinctSlices += (front - back + 1);

        if (distinctSlices > MAX_SLICES) {
            return MAX_SLICES;
        }
    }

    return distinctSlices;
}

