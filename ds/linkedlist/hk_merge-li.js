function mergeLists(head1, head2) {
  let currentNode = new SinglyLinkedListNode(-1);
  let headNode = null;
  if (head1.data < head2.data) {
    headNode = head1;
  } else {
    headNode = head2;
  }

  while (head1 !== null || head2 !== null) {
    if (head1 === null || head2 === null) {
      break;
    }
    if (head1.data < head2.data) {
      currentNode.next = head1;
      head1 = head1.next;
    } else {
      currentNode.next = head2;
      head2 = head2.next;
    }
    currentNode = currentNode.next;
  }

  if (head1 === null) {
    currentNode.next = head2;
  } else {
    currentNode.next = head1;
  }

  return headNode;
}
