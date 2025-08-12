function solution(A: number[]): number {
    const N = A.length;
    if (N === 0) {
        return 0;
    }

    // 1. Find a candidate for the leader using the Boyer-Moore majority vote algorithm
    let candidate = -1;
    let count = 0;
    for (let i = 0; i < N; i++) {
        if (count === 0) {
            candidate = A[i];
            count = 1;
        } else if (candidate === A[i]) {
            count++;
        } else {
            count--;
        }
    }

    // 2. Verify if the candidate is indeed the leader and count its total occurrences
    let totalLeaderCount = 0;
    for (let i = 0; i < N; i++) {
        if (A[i] === candidate) {
            totalLeaderCount++;
        }
    }

    if (totalLeaderCount <= N / 2) {
        return 0; // No leader exists in the array
    }

    const leader = candidate;
    let equiLeaders = 0;
    let leftLeaderCount = 0;

    // 3. Iterate through all possible split points to find equi leaders
    for (let i = 0; i < N; i++) {
        if (A[i] === leader) {
            leftLeaderCount++;
        }

        // Check if the leader is a leader in the left part (A[0...i])
        const leftSize = i + 1;
        const isLeaderInLeft = (leftLeaderCount > leftSize / 2);

        // Check if the leader is a leader in the right part (A[i+1...N-1])
        const rightSize = N - (i + 1);
        const rightLeaderCount = totalLeaderCount - leftLeaderCount;
        const isLeaderInRight = (rightLeaderCount > rightSize / 2);

        if (isLeaderInLeft && isLeaderInRight) {
            equiLeaders++;
        }
    }

    return equiLeaders;
}

