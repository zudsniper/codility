function solution(N: number): number {
    let minPerimeter = Number.MAX_SAFE_INTEGER;
    let i = 1;

    while (i * i <= N) {
        if (N % i === 0) {
            // i is a factor, so N/i is also a factor
            const width = i;
            const length = N / i;
            const currentPerimeter = 2 * (width + length);
            minPerimeter = Math.min(minPerimeter, currentPerimeter);
        }
        i++;
    }

    return minPerimeter;
}

