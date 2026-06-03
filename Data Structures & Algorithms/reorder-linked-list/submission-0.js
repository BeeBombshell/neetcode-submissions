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
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;

        // find middle element
        let slow = head;
        let fast = head;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        // slow is now the middle element

        // reverse second list
        let prev = null;
        let curr = slow.next;
        // disconnect slow.next
        slow.next = null;

        while(curr){
            const next = curr.next;
            curr.next = prev;

            prev = curr;
            curr = next;
        }

        // prev now holds head of reversed list

        // merge alternatively
        let first = head;
        let second = prev;

        while(second) {
            let temp1 = first.next;
            let temp2 = second.next

            // update nexts
            first.next = second;
            second.next = temp1;

            // update first and second
            first = temp1;
            second = temp2;
        }
    }
}
