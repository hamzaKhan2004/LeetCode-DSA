/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(head === null) return head;
    
    let left:ListNode = head;
    let right:ListNode = head.next;
    while(right !== null){
        if(left.val === right.val){
            left.next = right.next;
            right = right.next;
        }else{
            left = right;
            right = right.next;
        }
    }
    return head;

    
};