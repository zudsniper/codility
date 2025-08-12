function solution(A: number[]): number {
    const N = A.length;

    // Calculate the sum of numbers from 1 to N+1
    // The sum of an arithmetic series 1 to X is X * (X + 1) / 2
    const expectedSum = (N + 1) * (N + 2) / 2;

    // Calculate the sum of the elements in the given array
    const actualSum = A.reduce((sum, current) => sum + current, 0);

    // The missing element is the difference between the expected sum and the actual sum
    return expectedSum - actualSum;
}

