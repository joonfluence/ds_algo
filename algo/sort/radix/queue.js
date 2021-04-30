class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.length = 0;
    this.front = null; // dequeue 위치
    this.rear = null; // enqueue 위치
  }

  // JavaScript OverRiding ①
  isEmpty(qe) {
    if (typeof qe === "object") {
      return qe.length === 0;
    } else {
      return this.length === 0;
    }
  }

  peek() {
    return this.front;
  }

  // JavaScript OverRiding ②
  enqueue(data, qe) {
    // 여기선 매개변수를 가리키는 this가 되어야 하는데..

    const newNode = new Node(data);
    if (typeof qe === "object") {
      if (qe.isEmpty()) {
        qe.front = newNode;
        qe.rear = newNode;
        qe.length++;
        return newNode.data;
      }
      const enqueueNode = qe.rear;
      enqueueNode.next = newNode;
      qe.rear = newNode;
      qe.length++;
      return enqueueNode.data;
    } else {
      // 여기선 클래스를 가리키는 this.
      if (this.isEmpty()) {
        this.front = newNode;
        this.rear = newNode;
        this.length++;
        return newNode.data;
      }
      const enqueueNode = this.rear;
      enqueueNode.next = newNode;
      this.rear = newNode;
      this.length++;
      return enqueueNode.data;
    }
  }

  dequeue(qe) {
    if (typeof qe === "object") {
      if (qe.isEmpty()) {
        console.log("Queue underflow!");
        return false;
      }
      let dequeueNode = qe.front;
      const returnData = dequeueNode.data;
      qe.front = dequeueNode.next;
      dequeueNode = null;
      qe.length--;
      return returnData;
    } else {
      if (this.isEmpty()) {
        console.log("Queue underflow!");
        return false;
      }
      let dequeueNode = this.front;
      const returnData = dequeueNode.data;
      this.front = dequeueNode.next;
      dequeueNode = null;
      this.length--;
      return returnData;
    }
    // 큐가 비었을 때
  }
}

// export function enqueue(qe, data) {
//   const newNode = new Node(data);
//   // 처음 넣는 값일 때
//   if (qe.isEmpty()) {
//     qe.front = newNode;
//     qe.rear = newNode;
//     qe.length++;
//     return newNode.data;
//   }
//   const enqueueNode = qe.rear;
//   enqueueNode.next = newNode;
//   qe.rear = newNode;
//   qe.length++;
//   return enqueueNode.data;
// }

// export function dequeue(qe) {
//   // 큐가 비었을 때
//   if (qe.isEmpty()) {
//     console.log("Queue underflow!");
//     return false;
//   }
//   let dequeueNode = qe.front;
//   const returnData = dequeueNode.data;
//   qe.front = dequeueNode.next;
//   dequeueNode = null;
//   qe.length--;
//   return returnData;
// }

// export function isEmpty(qe) {
//   return qe.length === 0;
// }

// const init = () => {
//   const queue = new Queue();
//   console.log("연결리스트 기반의 큐를 구현해보자");

//   for (let i = 1; i < 13; i = i + 2) {
//     console.log(queue.enqueue(i));
//   }

//   console.log(queue.peek());

//   for (let i = 1; i < 13; i = i + 2) {
//     console.log(queue.dequeue());
//   }
// };

// init();
