function solution(A: number[]): number {
    if (A.length < 2) {
        return 0;
    }

    let leftSum = A[0];
    let rightSum = A.slice(1).reduce((a, b) => a + b, 0);
    let minDifference = Math.abs(leftSum - rightSum);

    for (let i = 1; i < A.length - 1; i++) {
        leftSum += A[i];
        rightSum -= A[i];
        const difference = Math.abs(leftSum - rightSum);
        if (difference < minDifference) {
            minDifference = difference;
        }
    }

    return minDifference;
}

