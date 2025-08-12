function solution(A: number[], B: number[]): number {
    const N = A.length;
    const downstreamFish: number[] = []; // Stack to store sizes of downstream-moving fish
    let aliveFish = 0;

    for (let i = 0; i < N; i++) {
        if (B[i] === 1) {
            // Fish is moving downstream, add its size to the stack
            downstreamFish.push(A[i]);
        } else {
            // Fish is moving upstream
            while (downstreamFish.length > 0) {
                const lastDownstreamFishSize = downstreamFish[downstreamFish.length - 1];
                if (lastDownstreamFishSize > A[i]) {
                    // Downstream fish eats the current upstream fish
                    break; // Current upstream fish is eaten, move to next fish in A
                } else {
                    // Current upstream fish eats the downstream fish
                    downstreamFish.pop(); // Remove eaten downstream fish from stack
                }
            }
            if (downstreamFish.length === 0) {
                // If no downstream fish are left, or all were eaten, this upstream fish survives
                aliveFish++;
            }
        }
    }

    // All fish remaining in the downstreamFish stack are alive
    aliveFish += downstreamFish.length;

    return aliveFish;
}

