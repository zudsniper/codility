function gcd(a: number, b: number): number {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

function solution(N: number, M: number): number {
    // The number of chocolates eaten is N / gcd(N, M)
    // This is because the process stops when we return to the starting chocolate (0).
    // The number of steps to return to 0 is LCM(N, M) / M.
    // And LCM(N, M) = (N * M) / GCD(N, M).
    // So, (N * M) / GCD(N, M) / M = N / GCD(N, M).
    return N / gcd(N, M);
}

