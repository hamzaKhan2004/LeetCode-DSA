/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head === null) return head;
    
    let left = head;
    let right = head.next;
    while(right != null){
        if(left.val === right.val){
            left.next = right.next;
        }else{
            left = right;
        }
        right = right.next;
    }
    return head;

};