/*
https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/description/
1315. Sum of Nodes with Even-Valued Grandparent
Given the root of a binary tree, return the sum of values of nodes with an even-valued grandparent. If there are no nodes with an even-valued grandparent, return 0.

A grandparent of a node is the parent of its parent if it exists.

Example 1:
Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 18
Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.

Example 2:
Input: root = [1]
Output: 0

Constraints:
The number of nodes in the tree is in the range [1, 104].
1 <= Node.val <= 100
*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

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

const traverse = (
  currentNode: TreeNode,
  parent: TreeNode,
  grandParent: TreeNode,
  callback: (node: TreeNode, grandParent: TreeNode) => void
) => {
  if (currentNode === null || currentNode === undefined) {
    return;
  }
  traverse(currentNode.left, currentNode, parent, callback);
  traverse(currentNode.right, currentNode, parent, callback);
  callback(currentNode, grandParent);
}

function sumEvenGrandparent(root: TreeNode | null): number {
  let sum = 0;
  traverse(root, null, null, (node, grandParent) => {
    if (grandParent !== null && grandParent.val % 2 === 0) {
      sum += node.val;
    }
  });
  return sum;
}
