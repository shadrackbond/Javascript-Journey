/**
 * @param {number[]} nums
 * @return {number}
 */
const largestPerimeter = (nums) => {
    // 1. Sort the array in non-decreasing (ascending) order.
    // Sorting allows us to check only adjacent triplets from the largest side.
    nums.sort((a, b) => a - b);

    // 2. Iterate backward, starting from the potential largest side (c).
    // The largest side will be at index n-1, the middle side (b) at n-2, and the smallest (a) at n-3.
    // We only need to check triplets (a, b, c) where a <= b <= c.
    // The loop iterates until the third-to-last element (index 2).
    for (let i = nums.length - 1; i >= 2; i--) {
        const c = nums[i];   // The longest side
        const b = nums[i - 1]; // The middle side
        const a = nums[i - 2]; // The shortest side

        // 3. Apply the Triangle Inequality Theorem: 
        // For a non-degenerate triangle (area > 0), the sum of the lengths of any two sides must be 
        // strictly greater than the length of the third side.
        // Since we know a <= b <= c, we only need to check the condition: a + b > c.
        // The other two conditions (a + c > b and b + c > a) are automatically satisfied.
        if (a + b > c) {
            // Found the first (and therefore largest perimeter) valid triangle.
            // The perimeter is the sum of its sides.
            return a + b + c;
        }
    }

    // 4. If the loop completes without finding a valid triangle, 
    // it's impossible to form any triangle of a non-zero area.
    return 0;
};

// Example usage:
let nums = [2, 1, 2];
let result = largestPerimeter(nums); // 5
// console.log(result); 

nums = [1, 2, 1];
result = largestPerimeter(nums); // 0
// console.log(result);