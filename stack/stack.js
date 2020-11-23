console.log("스택을 배열 도움 없이 구현해봅시다");

function Stack(){
    this.top = null;
    this.count = 0;
}

function Node(data){
    this.data = data;
    this.next = null; // 자바스크립트에서 다음 노드를 어떻게 지정해주는가? new Node()
}

Node.prototype = new Stack();

Stack.prototype.push = function(data){
    var node = new Node(data);
    node.next = this.top;
    this.top = node;
    return ++this.count;
}

Stack.prototype.pop = function(){
    if(!this.top){
        console.log("stack-underflow 발생");
        return false;
    }
    var data = this.top.data;
    this.top = this.top.next;
    this.count--;
    return data;
}

const testStack = new Stack();
testStack.push(3);
console.log(testStack.top);
testStack.pop();
testStack.pop();
console.log(testStack.top);
// testStack.push(5);
// console.log(testStack.top);
// testStack.push(7);
// console.log(testStack.top);
// testStack.push(9);
// console.log(testStack.top);
