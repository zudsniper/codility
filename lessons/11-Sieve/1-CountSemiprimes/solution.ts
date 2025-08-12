function solution(N: number, P: number[], Q: number[]): number[] {
    // Sieve of Eratosthenes to find primes up to N
    const primes: boolean[] = new Array(N + 1).fill(true);
    primes[0] = false;
    primes[1] = false;
    for (let i = 2; i * i <= N; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= N; j += i) {
                primes[j] = false;
            }
        }
    }

    const primeNumbers: number[] = [];
    for (let i = 2; i <= N; i++) {
        if (primes[i]) {
            primeNumbers.push(i);
        }
    }

    // Find all semiprimes up to N
    const isSemiprime: boolean[] = new Array(N + 1).fill(false);
    for (let i = 0; i < primeNumbers.length; i++) {
        for (let j = i; j < primeNumbers.length; j++) {
            const p1 = primeNumbers[i];
            const p2 = primeNumbers[j];
            const product = p1 * p2;

            if (product > N) {
                break; // Optimization: products will only get larger
            }
            isSemiprime[product] = true;
        }
    }

    // Calculate prefix sums for semiprimes
    const semiprimePrefixSums: number[] = new Array(N + 1).fill(0);
    for (let i = 1; i <= N; i++) {
        semiprimePrefixSums[i] = semiprimePrefixSums[i - 1] + (isSemiprime[i] ? 1 : 0);
    }

    // Answer queries
    const results: number[] = [];
    for (let i = 0; i < P.length; i++) {
        const start = P[i];
        const end = Q[i];
        results.push(semiprimePrefixSums[end] - semiprimePrefixSums[start - 1]);
    }

    return results;
}

