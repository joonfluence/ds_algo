function insertNodeAtHead(head, data) {
  if (head === null) {
    head = new SinglyLinkedListNode(data);
    return head;
  }
  const newNode = new SinglyLinkedListNode(data);
  const headNode = head;
  head = newNode;
  head.next = headNode;
  return head;
}
