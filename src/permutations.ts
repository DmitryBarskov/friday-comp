/*
https://leetcode.com/problems/permutations/
46. Permutations
Medium
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]

Example 4:

[1,2,3,4]
Output: [[1,2,3,4], [1,2,4,3], [1,3,2,4], [1,3,4,2], [1,4,3,2], [1,4,2,3], ...]

Constraints:
1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
*/

function permute(nums: number[]): number[][] {
  if (nums.length === 1) {
    return [nums];
  }

  return nums.flatMap(num => {
    return permute(nums.filter(x => x !== num)).map(set => [num, ...set]);
  });
}
