function solution(X: number, Y: number, D: number): number {
    const distance = Y - X;
    const jumps = Math.ceil(distance / D);
    return jumps;
}

