# Jump Game

## Problem Description

You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return `true` if you can reach the last index, or `false` otherwise.

## Examples

### Example 1

**Input:** `nums = [2,3,1,1,4]`  
**Output:** `true`  
**Explanation:** Jump 1 step from index 0 to 1, then 3 steps to the last index.

### Example 2

**Input:** `nums = [3,2,1,0,4]`  
**Output:** `false`  
**Explanation:** You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

## Constraints

- `1 <= nums.length <= 10^4`
- `0 <= nums[i] <= 10^5`

## Solution Approach

You can solve this problem using a greedy approach. The idea is to keep track of the farthest index you can reach as you iterate through the array. If at any point the current index exceeds the farthest index reachable, you cannot reach the last index.

### Pseudocode

1. Initialize `farthest` to 0.
2. Loop through the array:
   - If the current index is greater than `farthest`, return `false`.
   - Update `farthest` to be the maximum of `farthest` and the current index plus the jump length at that index.
3. After the loop, if `farthest` is greater than or equal to the last index, return `true`. Otherwise, return `false`.

## Complexity Analysis

- **Time Complexity:** O(n), where n is the length of the array.
- **Space Complexity:** O(1), as we are using a constant amount of extra space.
