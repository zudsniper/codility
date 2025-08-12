function solution(A: number[]): number {
    const N = A.length;
    const MAX_INTERSECTIONS = 10000000;

    const starts: number[] = new Array(N);
    const ends: number[] = new Array(N);

    for (let i = 0; i < N; i++) {
        starts[i] = i - A[i];
        ends[i] = i + A[i];
    }

    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    let intersections = 0;
    let openDiscs = 0;
    let endPointer = 0;

    for (let i = 0; i < N; i++) {
        while (endPointer < N && ends[endPointer] < starts[i]) {
            openDiscs--;
            endPointer++;
        }
        intersections += openDiscs;
        openDiscs++;

        if (intersections > MAX_INTERSECTIONS) {
            return -1;
        }
    }

    return intersections;
}

