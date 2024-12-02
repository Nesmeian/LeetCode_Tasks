/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
//!My solution
function hasCycle(head) {
  let p1 = head; // Initialize p1
  let p2 = head; // Initialize p2

  while (p2 && p2.next) {
    // Check two steps
    p1 = p1.next; // p1 moves one step
    p2 = p2.next.next; // p2 moves two steps
    if (p1 === p2) return true; // If p1 and p2 meet, a cycle is found
  }
  return false; // If p2 doesn't reach p1, it means there's no cycle
}
