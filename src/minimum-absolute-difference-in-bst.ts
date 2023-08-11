/*
530. Minimum Absolute Difference in BST
Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

Example 1:
Input: root = [4,2,6,1,3]
Output: 1

Example 2:
Input: root = [1,0,48,null,null,12,49]
Output: 1

Constraints:
The number of nodes in the tree is in the range [2, 104].
0 <= Node.val <= 105

Note: This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/
*/

// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function traverseBst(root: TreeNode | null, callback: (visited: TreeNode) => void): void {
  if (root === null) {
    return;
  }

  traverseBst(root.left, callback);
  callback(root);
  traverseBst(root.right, callback);
}

/*
Explanation:
In BST every node on the left is less than given node
and every node on the right is greater than given node.
We can traverse it using left-root-right DFS algorithm, so that
we will get every node in the increasing order (see traverseBst).
To find minimum difference we can just compare only consequetive elements,
because difference is greater as elements are farer from each other.
[1, 3, 4, 7, 9, 10, 11] <- no sense comparing 1 and 7, because it will make
least difference only with 3. So we should iterate the array pairwise to find
the minimum difference. So we do it with our tree as well.
*/
function getMinimumDifference(root: TreeNode | null): number {
  let minDiff: number | null = null;
  /* we need to store previous node value in order to find differences */
  let previousNodeValue: number | null = null;

  traverseBst(root, (currentNode) => {
    /* if there were no previous node we have nothing to find difference between
       so we remember the value and continue iterating the tree */
    if (previousNodeValue === null) {
      previousNodeValue = currentNode.val;
      return;
    }

    let currentDifference = currentNode.val - previousNodeValue;
    /* if there were no minDiff we assign it without comparison */
    if (minDiff === null || currentDifference < minDiff) {
      minDiff = currentDifference;
    }

    previousNodeValue = currentNode.val;
  });

  return minDiff!!;
}
