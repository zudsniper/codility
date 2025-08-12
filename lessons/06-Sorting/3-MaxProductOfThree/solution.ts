function solution(A: number[]): number {
    const N = A.length;
    A.sort((a, b) => a - b);

    // The maximum product can be either:
    // 1. The product of the three largest numbers (if all are positive or two negatives and one positive)
    // 2. The product of the two smallest (most negative) numbers and the largest positive number

    const product1 = A[N - 1] * A[N - 2] * A[N - 3];
    const product2 = A[0] * A[1] * A[N - 1];

    return Math.max(product1, product2);
}

