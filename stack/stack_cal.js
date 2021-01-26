function Stack() {
  this.top = null;
  this.size = 0;
}

function Node(data) {
  this.data = data;
  this.next = null;
}

Stack.prototype.push = function (data) {
  let newNode = new Node(data);

  if (!this.top) {
    this.top = newNode;
    this.size++;
    return newNode;
  }

  newNode.next = this.top;
  this.top = newNode;
  this.size++;
  return newNode;
};

Stack.prototype.pop = function () {
  if (!this.top) {
    throw "더 이상 제거할 데이터가 없습니다.";
  } else {
    let node = this.top;
    let data = node.data;
    this.top = node.next;
    this.size--;
    node = null;
    return data;
  }
};

// 후입선출 : * / 등 우선순위가 높은 연산자에게 높은 점수를 주어, top에 두어 먼저 꺼낼 수 있도록 한다.
const getPriority = function (char) {
  switch (char) {
    case "(":
      return 0;
    case "+":
    case "-":
      return 1;
    case "*":
    case "/":
      return 2;
    default:
      return 3;
  }
};

const transition = function (stack, s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    // 연산자는 Stack에 넣고 더 우선순위가 높은 연산자를 스택에 넣는다.
    if (s[i] === "+" || s[i] === "-" || s[i] === "*" || s[i] === "/") {
      while (
        stack.top !== null &&
        getPriority(stack.top.data) >= getPriority(s[i])
      ) {
        // 연산자가 스택의 연산자보다 우선순위가 낮다면, pop한다.
        res += stack.pop();
        res += " ";
      }
      stack.push(s[i]);
      // ( 은 스택에 넣는다.
    } else if (s[i] === "(") {
      stack.push(s[i]);
      // ) 은 stack에서 )가 나올 때까지 pop한다.
    } else if (s[i] === ")") {
      while (stack.top.data !== "(") {
        // 스택에서 pop되면서 후위표기법으로 변환된다.
        res += stack.pop();
        res += " ";
      }
      // ( 을 빼는 곳
      stack.pop();
    } else {
      res += s[i];
      res += " ";
    }
  }
  while (stack.top !== null) {
    res += stack.pop();
    res += " ";
  }
  return res;
};

function calculate(stack, s, size) {
  let x, y, result;
  let temp;
  for (let i = 0; i < size; i++) {
    // 피연산자는 stack에 넣고, 배열에서 연산자가 나왔을 경우에 pop한다.
    if (s[i] === "+" || s[i] === "-" || s[i] === "*" || s[i] === "/") {
      y = Number(stack.pop());
      x = Number(stack.pop());
      switch (s[i]) {
        case "+":
          result = x + y;
          break;
        case "-":
          result = x - y;
          break;
        case "*":
          result = x * y;
          break;
        case "/":
          result = x / y;
          break;
      }
      temp = result;
      console.log(temp);
      stack.push(temp);
    } else {
      stack.push(s[i]);
    }
  }
  stack.pop();
}

function main() {
  let stack = new Stack();
  let a = "( ( 3 + 4 ) * 5 ) - 5 * 7 * 5 - 5 * 10";
  let size = 0;
  let b = [];
  // 띄어쓰기를 통해, 값을 구분하고 이를 배열의 원소로 할당해준다.
  b = a.split(" ");
  let res = transition(stack, b);
  // 띄어쓰기를 통해, 값을 구분하고 이를 배열의 원소로 할당해준다.
  b = res.split(" ");
  for (let i = 0; i < res.length; i++) {
    size++;
  }
  calculate(stack, b, size);
}

main();
