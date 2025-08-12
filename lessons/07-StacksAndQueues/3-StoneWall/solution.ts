function solution(H: number[]): number {
    const N = H.length;
    let blocks = 0;
    const stack: number[] = [];

    for (let i = 0; i < N; i++) {
        const currentHeight = H[i];

        // Remove blocks from the stack that are taller than the current height
        while (stack.length > 0 && stack[stack.length - 1] > currentHeight) {
            stack.pop();
        }

        // If the stack is empty or the top block is shorter than the current height,
        // a new block is needed.
        if (stack.length === 0 || stack[stack.length - 1] < currentHeight) {
            stack.push(currentHeight);
            blocks++;
        }
        // If stack.length > 0 and stack[stack.length - 1] === currentHeight,
        // it means the current height can be covered by the last block on the stack,
        // so no new block is needed.
    }

    return blocks;
}

