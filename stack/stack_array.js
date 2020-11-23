console.log("손쉬운 방법으로 스택 자료구조를 구현해봅시다.");

function Stack(){
    this.top = -1;
    this.data = [];
}

Stack.prototype.push = function(input) {
    this.top++;
    this.data.push(input);
    return this.data[this.top];
}

Stack.prototype.pop = function(){
    this.top--;
    return this.data.pop();
}

Stack.prototype.size = function(){
    return this.top+1;
}

const testStack = new Stack();
console.log("push "+testStack.push(3));
console.log("push "+testStack.push(3));
console.log("push "+testStack.push(3));
console.log("pop "+testStack.pop());
console.log("pop "+testStack.pop());
console.log("pop "+testStack.pop());
console.log("size "+testStack.size());