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
class BSTIterator {
  private stack: TreeNode[];

  constructor(root: TreeNode | null) {
    this.stack = [];
    this.push(root);
  }

  next(): number {
    return this.pop().val;
  }

  hasNext(): boolean {
    return this.stack.length !== 0;
  }

  private push(node: TreeNode | null) {
    if (node === null) {
      return;
    }

    this.stack.push(node);
    this.push(node.left);
  }

  private pop(): TreeNode {
    let poppedNode = this.stack.pop();
    this.push(poppedNode.right);
    return poppedNode;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
