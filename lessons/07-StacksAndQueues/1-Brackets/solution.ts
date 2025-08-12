function solution(S: string): number {
    const stack: string[] = [];
    const bracketMap: { [key: string]: string } = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    for (let i = 0; i < S.length; i++) {
        const char = S[i];

        if (bracketMap[char]) {
            // It's an opening bracket
            stack.push(char);
        } else {
            // It's a closing bracket
            if (stack.length === 0) {
                return 0; // No matching opening bracket
            }
            const lastOpenBracket = stack.pop();
            if (bracketMap[lastOpenBracket!] !== char) {
                return 0; // Mismatched brackets
            }
        }
    }

    return stack.length === 0 ? 1 : 0; // Return 1 if stack is empty (all brackets matched), else 0
}

