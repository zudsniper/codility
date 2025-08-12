function solution(A: number[], K: number): number[] {
    const N = A.length;

    if (N === 0) {
        return [];
    }

    K = K % N; // Handle rotations larger than array length

    if (K === 0) {
        return A; // No rotation needed
    }

    // Split the array into two parts and concatenate them in reverse order
    // The elements from index N - K to N-1 will move to the beginning
    // The elements from index 0 to N - K - 1 will move to the end
    return A.slice(N - K).concat(A.slice(0, N - K));
}

