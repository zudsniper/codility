/**
 * This is a less optimal solution for the CyclicRotation problem.
 * It performs the rotation K times, one step at a time, by repeatedly
 * moving the last element to the front and shifting the rest.
 * While straightforward, this approach is less efficient than solutions
 * that use array slicing or a more direct calculation of the final positions.
 *
 * Time Complexity: O(N * K) - In the worst case, the loop runs K times,
 *                  and each rotation (shifting elements) takes O(N) time.
 * Space Complexity: O(N) - To store the array, though it can be O(1) if done in-place.
 *
 * In contrast, the optimal solution using array slicing and concatenation has:
 * Time Complexity: O(N) - Slicing and concatenating arrays typically takes linear time.
 * Space Complexity: O(N) - To create new arrays for slicing and concatenation.
 */
function solution_less_optimal(A: number[], K: number): number[] {
    const N = A.length;

    if (N === 0) {
        return [];
    }

    // Normalize K to avoid unnecessary rotations
    K = K % N;

    // If K is 0 after normalization, no rotation is needed
    if (K === 0) {
        return A;
    }

    // Create a copy of the array to avoid modifying the original input directly
    const rotatedArray = [...A];

    // Perform K rotations, one element at a time
    for (let i = 0; i < K; i++) {
        const lastElement = rotatedArray.pop(); // Remove the last element
        if (lastElement !== undefined) {
            rotatedArray.unshift(lastElement); // Add it to the beginning
        }
    }

    return rotatedArray;
}


