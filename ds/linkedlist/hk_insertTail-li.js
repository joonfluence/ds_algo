function insertNodeAtTail(head, data) {
  const newNode = new SinglyLinkedListNode(data);

  if (head === null) {
    head = newNode;
    return head;
  } else {
    let tail = head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;
    return head;
  }
}
