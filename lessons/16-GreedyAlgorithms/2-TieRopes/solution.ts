function solution(K: number, A: number[]): number {
    let tiedRopesCount = 0;
    let currentLength = 0;

    for (let i = 0; i < A.length; i++) {
        currentLength += A[i];
        if (currentLength >= K) {
            tiedRopesCount++;
            currentLength = 0; // Start a new rope segment
        }
    }

    return tiedRopesCount;
}

