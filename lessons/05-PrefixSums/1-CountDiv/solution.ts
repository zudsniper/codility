function solution(A: number, B: number, K: number): number {
    // Count numbers divisible by K up to B
    const countB = Math.floor(B / K);

    // Count numbers divisible by K up to A-1
    const countA_minus_1 = Math.floor((A - 1) / K);

    // The number of integers divisible by K in the range [A..B] is countB - countA_minus_1
    return countB - countA_minus_1;
}

