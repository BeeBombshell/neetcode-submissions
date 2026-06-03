/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let curr = head;
        let prev = null;

        while (curr){
            const next = curr.next;
            curr.next = prev;

            // advance
            prev = curr;
            curr = next;
        }

        return prev;
    }
}
