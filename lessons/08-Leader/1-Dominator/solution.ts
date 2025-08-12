function solution(A: number[]): number {
    const N = A.length;
    if (N === 0) {
        return -1;
    }

    const stack: number[] = [];

    for (let i = 0; i < N; i++) {
        if (stack.length === 0) {
            stack.push(A[i]);
        } else if (stack[stack.length - 1] === A[i]) {
            stack.push(A[i]);
        } else {
            stack.pop();
        }
    }

    if (stack.length === 0) {
        return -1; // No candidate for dominator
    }

    const candidate = stack[0];
    let count = 0;
    let dominatorIndex = -1;

    for (let i = 0; i < N; i++) {
        if (A[i] === candidate) {
            count++;
            dominatorIndex = i;
        }
    }

    if (count > N / 2) {
        return dominatorIndex;
    } else {
        return -1;
    }
}

