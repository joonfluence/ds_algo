console.log("안보고 다시 구현해봅시다");

// 일단 스택 객체를 만들자. 이 안에는 스택 전체의 정보들을 가지고 있어야 한다. 스택의 중요한 정보는 사이즈와 top에 있는 Node이다. 

function Stack(){
    this.top = null;
    this.size = 0;
}

// 링크드리스트 기반으로 구현할 것이므로, Node 객체를 따로 만들어줘야 한다. 노드는 다음 객체를 지정하는 header 부분과 data 부분이다. 

function Node(data){
    this.next = null;
    this.data = data;
}

// push의 주요 동작은 '주어진 정보를 넘기는 것'이며, this.size를 반환해준다. 또한 push된 값은 stack의 top이 되도록 지정해주고, Node의 next를 지정해줘야 한다.  

Stack.prototype.push = function (data){
    let newNode = new Node(data);
    // console.log("newNode : "+newNode);
    let temp = newNode.data;
    // console.log("temp : "+temp);
    // console.log("this.top : "+this.top);
    newNode.next = this.top;
    this.top = newNode;
    // console.log("this.top : "+this.top);
    return ++this.size;
}

// pop의 주요 동작은 가장 위에 있는 데이터를 스택에서 뺴는 것이며, 뺀 요소를 반환해준다. 또한 this.top을 재설정해주고, this.size를 줄여야한다. 

Stack.prototype.pop = function() {
    let popNode = this.top;
    // console.log("this.top : "+this.top);
    if(!this.top){
        return false;
    }
    // this.top.data = null;
    this.top = this.top.next;
    this.size--;
    return popNode;
}

const testStack = new Stack();
console.log(testStack.push(3));
console.log(testStack.pop());
