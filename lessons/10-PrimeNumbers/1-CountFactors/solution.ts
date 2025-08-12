function solution(N: number): number {
    let factors = 0;
    let i = 1;

    while (i * i < N) {
        if (N % i === 0) {
            factors += 2; // i and N/i are factors
        }
        i++;
    }

    if (i * i === N) {
        factors += 1; // i is a factor and N/i is also i (perfect square)
    }

    return factors;
}

