class doublyLinkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addLast(data) {
    const newNode = new Node(data);

    // 만약 삽입한 값이 첫번째 값일 경우, newNode를 가리킨다.
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return newNode.data;
    }

    // Node -> NewNode && newNode -> Node
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return newNode.data;
  }

  add(data) {
    const newNode = new Node(data);

    // 만약 삽입한 값이 첫번째 값일 경우, newNode를 가리킨다.
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return newNode.data;
    }

    let temp = this.head;

    // 오름차순 정렬
    while (temp.next !== null && temp.data < newNode.data) {
      // 값이 중간에 있을 경우
      if (temp.next.data > newNode.data) {
        break;
      }
      temp = temp.next;
    }

    // addFirst
    if (temp === this.head) {
      this.head = newNode;
      temp.prev = this.head;
      newNode.next = temp;
      return newNode.data;

      // 값이 중간에 있을 경우
    } else if (temp.next !== null) {
      newNode.next = temp.next;
      temp.next.prev = newNode;
      temp.next = newNode;
      newNode.prev = temp;
      return newNode.data;
    }

    // 마지막일 경우
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return newNode.data;
  }

  removeLast() {
    if (this.head === null) {
      console.log("empty");
      return;
    }

    let temp = this.head;
    while (temp.next.next !== null) {
      temp = temp.next;
    }
    let returnValue = temp.next.data;
    temp.next = null;
    this.tail = temp;
    this.length--;
    return returnValue;
  }

  showAll() {
    let temp = this.head;

    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }

    if (temp === this.head) {
      console.log(temp.data);
      return;
    }
  }
}

// 초기 값 설정

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

const list = new doublyLinkedlist();
console.log(list.addLast(2));
console.log(list.addLast(4));
console.log(list.addLast(6));
console.log(list.add(5));
console.log(list.add(11));
console.log(list.add(1));
console.log(list.removeLast());
console.log(list.removeLast());
console.log(list.removeLast());
console.log(list.showAll());
