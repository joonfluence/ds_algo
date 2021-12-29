function reverse(llist) {
  let prev = null;
  let next = null;
  let head = llist;
  
  while(head !== null){
      next = head.next;
      head.next = prev;
      prev = head;
      head = next;
  }
  
  head = prev;
  return head;
}
