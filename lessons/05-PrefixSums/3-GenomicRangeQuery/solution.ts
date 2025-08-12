function solution(S: string, P: number[], Q: number[]): number[] {
    const N = S.length;
    const M = P.length;
    const result: number[] = [];

    // Create prefix sums for each nucleotide
    const prefixSums = {
        'A': new Array(N + 1).fill(0),
        'C': new Array(N + 1).fill(0),
        'G': new Array(N + 1).fill(0),
        'T': new Array(N + 1).fill(0),
    };

    for (let i = 0; i < N; i++) {
        prefixSums.A[i + 1] = prefixSums.A[i] + (S[i] === 'A' ? 1 : 0);
        prefixSums.C[i + 1] = prefixSums.C[i] + (S[i] === 'C' ? 1 : 0);
        prefixSums.G[i + 1] = prefixSums.G[i] + (S[i] === 'G' ? 1 : 0);
        prefixSums.T[i + 1] = prefixSums.T[i] + (S[i] === 'T' ? 1 : 0);
    }

    for (let i = 0; i < M; i++) {
        const startIndex = P[i];
        const endIndex = Q[i] + 1;

        if (prefixSums.A[endIndex] - prefixSums.A[startIndex] > 0) {
            result.push(1);
        } else if (prefixSums.C[endIndex] - prefixSums.C[startIndex] > 0) {
            result.push(2);
        } else if (prefixSums.G[endIndex] - prefixSums.G[startIndex] > 0) {
            result.push(3);
        } else {
            result.push(4);
        }
    }

    return result;
}

