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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let curr = root;

        while (curr) {
            // if p & q lie in left subtree
            if (p.val < curr.val && q.val < curr.val) {
                curr = curr.left;
            }
            // if both lie in right subtree
            else if (p.val > curr.val && q.val > curr.val) {
                curr = curr.right;
            }
            // split case -> curr is LCA
            else {
                return curr;
            }
        }

        return null;
    }
}
