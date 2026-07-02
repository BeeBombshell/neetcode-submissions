/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let diameter = 0;

        const dfs = (node) => {
            // if empty
            if (!node) {
                return 0;
            }

            // get height of left & right subtree
            const leftHeight = dfs(node.left);
            const rightHeight = dfs(node.right);

            // replace diameter if longer
            diameter = Math.max(diameter, leftHeight + rightHeight);

            // return max height of current subtree
            // height = edge (nodes + 1)
            return 1 + Math.max(leftHeight, rightHeight);
        };

        dfs(root);

        return diameter;
    }
}
