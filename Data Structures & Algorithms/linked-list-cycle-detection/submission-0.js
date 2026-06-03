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
     * @return {boolean}
     */
    hasCycle(head) {

        // use fast and slow pointer method
        // Floyd's Cycle Detection

        let slow = head;
        let fast = head;

        // keep checking until fast.next reaches null
        while(fast && fast.next) {
            // increment by 1
            slow = slow.next;
            // increment by 2
            fast = fast.next.next;

            // if at any point fast === slow -> cycle detected
            if (fast === slow) return true;
        }

        return false;

    }
}
