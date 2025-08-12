function gcd(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function hasSamePrimeDivisors(a: number, b: number): boolean {
    if (a === b) {
        return true;
    }
    if (a === 1 || b === 1) {
        return false;
    }

    const commonDivisor = gcd(a, b);

    // Check if all prime factors of 'a' are also prime factors of 'commonDivisor'
    let currentA = a;
    while (currentA !== 1) {
        const gcdA = gcd(currentA, commonDivisor);
        if (gcdA === 1) {
            break; // currentA has a prime factor not in commonDivisor
        }
        currentA /= gcdA;
    }

    // Check if all prime factors of 'b' are also prime factors of 'commonDivisor'
    let currentB = b;
    while (currentB !== 1) {
        const gcdB = gcd(currentB, commonDivisor);
        if (gcdB === 1) {
            break; // currentB has a prime factor not in commonDivisor
        }
        currentB /= gcdB;
    }

    return currentA === 1 && currentB === 1;
}

function solution(A: number[], B: number[]): number {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if (hasSamePrimeDivisors(A[i], B[i])) {
            count++;
        }
    }
    return count;
}

