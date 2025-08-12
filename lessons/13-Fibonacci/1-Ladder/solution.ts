function solution(A: number[], B: number[]): number[] {
    const L = A.length;
    const results: number[] = new Array(L);

    // Find the maximum value in A to determine the Fibonacci sequence length needed
    const maxA = Math.max(...A);

    // Precompute Fibonacci numbers up to maxA
    // F[0] = 1 (representing 0 steps, 1 way to stay at 0)
    // F[1] = 1 (representing 1 step, 1 way to climb)
    // F[2] = 2 (representing 2 steps, 2 ways to climb: 1+1, 2)
    // The problem defines ways(n) as F(n+1) in standard Fibonacci sequence (F(0)=0, F(1)=1)
    // So, F(0)=1, F(1)=1, F(2)=2, F(3)=3, F(4)=5, F(5)=8
    const fib: number[] = new Array(maxA + 1);
    fib[0] = 1;
    fib[1] = 1;

    for (let i = 2; i <= maxA; i++) {
        fib[i] = (fib[i - 1] + fib[i - 2]);
    }

    for (let i = 0; i < L; i++) {
        // The number of ways to climb A[i] steps is fib[A[i]]
        // We need to return this value modulo 2^B[i]
        // Using bitwise AND for modulo 2^k: x % (2^k) is equivalent to x & (2^k - 1)
        results[i] = fib[A[i]] & ((1 << B[i]) - 1);
    }

    return results;
}

