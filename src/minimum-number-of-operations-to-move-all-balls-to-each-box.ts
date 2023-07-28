/*
https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/submissions/988598623/
1769. Minimum Number of Operations to Move All Balls to Each Box

You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.

In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.

Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.

Each answer[i] is calculated considering the initial state of the boxes.

Example 1:
Input: boxes = "110"
Output: [1,1,3]
Explanation: The answer for each box is as follows:
1) First box: you will have to move one ball from the second box to the first box in one operation.
2) Second box: you will have to move one ball from the first box to the second box in one operation.
3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.

Example 2:
Input: boxes = "001011"
Output: [11,8,5,4,3,4]

Constraints:
n == boxes.length
1 <= n <= 2000
boxes[i] is either '0' or '1'.
*/
function minOperations(boxes: string): number[] {
  let normalBoxes = boxes.split("").map(b => parseInt(b)); // [0, 0, 1, 0, 1, 1]

  let ballsAmount = normalBoxes.reduce((a, b) => a + b, 0);

  let sideDiffs = new Array<number>(boxes.length);

  let ballsOnLeft = 0;
  let ballsOnRight = ballsAmount;

  for (let i = 0; i < normalBoxes.length - 1; i++) {
    if (normalBoxes[i] === 1) {
      ballsOnLeft += 1;
      ballsOnRight -= 1;
    }

    sideDiffs[i] = ballsOnLeft - ballsOnRight;
  }


  let operations = new Array<number>(boxes.length);
  operations[0] = normalBoxes.reduce((dist, item, index) => dist + item * index, 0);

  for (let i = 1; i < operations.length; i++) {
    operations[i] = operations[i - 1] + sideDiffs[i - 1];
  }

  return operations; // [11,8,5,4,3,4]
}
