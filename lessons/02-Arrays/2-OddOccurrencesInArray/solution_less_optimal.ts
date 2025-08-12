/**
 * This is a less optimal solution for the OddOccurrencesInArray problem.
 * It uses a hash map (or frequency map) to count the occurrences of each number.
 * Then, it iterates through the map to find the number with an odd count.
 * While correct, this approach uses more memory and can be slower than the
 * bitwise XOR solution, especially for large input arrays with a wide range of values.
 *
 * Time Complexity: O(N) - Iterating through the array to populate the map takes O(N) time.
 *                  Iterating through the map takes O(D) time, where D is the number of distinct elements.
 *                  In the worst case, D can be N.
 * Space Complexity: O(D) - To store the counts of distinct elements in the hash map.
 *
 * In contrast, the optimal solution using the XOR property has:
 * Time Complexity: O(N) - A single pass through the array.
 * Space Complexity: O(1) - Only a single variable is used to store the XOR sum.
 */
function solution_less_optimal(A: number[]): number {
    const counts = new Map<number, number>();

    // Count occurrences of each number
    for (const num of A) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }

    // Find the number with an odd count
    for (const [num, count] of counts.entries()) {
        if (count % 2 !== 0) {
            return num;
        }
    }

    // This line should theoretically not be reached given the problem constraints
    // (guaranteed to have exactly one unpaired element).
    return -1; 
}


