/*
https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
350. Intersection of Two Arrays II
*/
// Map[number => number of occurences in given array]
const frequences = (nums: number[]) => {
  let counts = new Map<number, number>();
  for (let num of nums) {
    let alreadyOccured = counts.get(num) ?? 0;
    counts.set(num, alreadyOccured + 1);
  }
  return counts;
};

function intersect(nums1: number[], nums2: number[]): number[] {
  let freq1 = frequences(nums1);
  let freq2 = frequences(nums2);

  let result: number[] = [];

  freq1.forEach((occurences, num) => {
    let totalOccurences = Math.min(occurences, freq2.get(num) ?? 0);
    for (let i = 0; i < totalOccurences; i++) {
      result.push(num);
    }
  });
  return result;
}
