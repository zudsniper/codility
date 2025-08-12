function solution(A: number[]): number {
    let result = 0;

    for (let i = 0; i < A.length; i++) {
        result ^= A[i];
    }

    return result;
}

