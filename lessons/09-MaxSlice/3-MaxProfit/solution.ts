function solution(A: number[]): number {
    const N = A.length;
    if (N < 2) {
        return 0; // Cannot make a profit with less than 2 days
    }

    let minPrice = A[0];
    let maxProfit = 0;

    for (let i = 1; i < N; i++) {
        // Calculate potential profit if we sell today
        const currentProfit = A[i] - minPrice;
        maxProfit = Math.max(maxProfit, currentProfit);

        // Update minimum price seen so far
        minPrice = Math.min(minPrice, A[i]);
    }

    return maxProfit;
}

