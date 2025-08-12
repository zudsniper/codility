function solution(S: string): number {
    let balance = 0;

    for (let i = 0; i < S.length; i++) {
        const char = S[i];
        if (char === '(') {
            balance++;
        } else if (char === ')') {
            balance--;
        }

        if (balance < 0) {
            return 0; // Unbalanced: closing parenthesis without a matching opening one
        }
    }

    return balance === 0 ? 1 : 0; // Return 1 if balanced, 0 otherwise
}

