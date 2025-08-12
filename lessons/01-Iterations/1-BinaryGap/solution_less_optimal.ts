/**
 * This is a less optimal solution for the BinaryGap problem.
 * It converts the number to its binary string representation first,
 * then iterates through the string to find the longest binary gap.
 * While conceptually simpler for some, it is less efficient than
 * the bitwise operation approach due to the overhead of string conversion
 * and character-by-character processing.
 *
 * Time Complexity: O(log N) - Converting N to binary string takes O(log N) time.
 *                  Iterating through the string also takes O(log N) time (length of binary string).
 * Space Complexity: O(log N) - To store the binary string representation of N.
 *
 * In contrast, the optimal solution using bitwise operations has:
 * Time Complexity: O(log N) - Each right shift (N >>= 1) effectively divides N by 2.
 * Space Complexity: O(1) - Only a few variables are used.
 */
function solution_less_optimal(N: number): number {
    // Convert the number to its binary string representation
    // Example: 1041 (decimal) -> "10000010001" (binary string)
    const binaryString = N.toString(2);

    let maxGap = 0;
    let currentGap = 0;
    let inGap = false;

    // Iterate through the binary string
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '1') {
            // If we encounter a '1':
            // If we were previously in a gap, it means the gap has ended.
            // Compare the current gap length with the maximum found so far.
            if (inGap) {
                maxGap = Math.max(maxGap, currentGap);
            }
            // Reset current gap length and mark that we are now 'in' a potential gap
            // (waiting for the next '0' to start counting).
            currentGap = 0;
            inGap = true;
        } else { // binaryString[i] === '0'
            // If we encounter a '0':
            // Only count zeros if we are currently 'in' a gap (i.e., after the first '1').
            if (inGap) {
                currentGap++;
            }
        }
    }

    return maxGap;
}


