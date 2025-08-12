function solution(A: number[]): number {
    const N = A.length;

    // Generate Fibonacci numbers up to N + 1 (for jumping to the other side)
    const fib: number[] = [0, 1];
    let i = 2;
    while (fib[i - 1] <= N + 1) {
        fib[i] = fib[i - 1] + fib[i - 2];
        i++;
    }
    // Filter out 0 and 1, and any fib numbers larger than N+1
    const jumpLengths = fib.filter(f => f > 0 && f <= N + 1);

    // Create an array to store the minimum jumps to reach each position
    // Initialize with -1 (unreachable) and 0 for the starting bank (-1)
    const minJumps: number[] = new Array(N + 1).fill(-1);

    // Mark positions reachable from the starting bank (-1)
    for (const jump of jumpLengths) {
        if (jump - 1 >= 0 && jump - 1 < N && A[jump - 1] === 1) {
            minJumps[jump - 1] = 1;
        } else if (jump === N + 1) {
            // If a single jump can reach the other side
            return 1;
        }
    }

    // Iterate through the river positions
    for (let currentPos = 0; currentPos < N; currentPos++) {
        if (A[currentPos] === 1 && minJumps[currentPos] !== -1) {
            // If this position is a leaf and reachable
            for (const jump of jumpLengths) {
                const nextPos = currentPos + jump;

                if (nextPos === N) {
                    // Reached the other side
                    if (minJumps[N] === -1 || minJumps[currentPos] + 1 < minJumps[N]) {
                        minJumps[N] = minJumps[currentPos] + 1;
                    }
                } else if (nextPos < N && A[nextPos] === 1) {
                    // Landed on another leaf
                    if (minJumps[nextPos] === -1 || minJumps[currentPos] + 1 < minJumps[nextPos]) {
                        minJumps[nextPos] = minJumps[currentPos] + 1;
                    }
                }
            }
        }
    }

    return minJumps[N];
}

