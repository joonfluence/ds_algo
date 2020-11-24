// 초기에 설정해줘야 하는 속성은 무엇인가? 

function Linkedlist (){
    this.length = 0;
    this.head = null;
    this.tail = null;
}

function Node(data){
    this.next = null;
    this.data = data;
}

Linkedlist.prototype.add = function (data){
    let newNode = new Node(data);
    this.length++;
    
    if(!this.head){
    // this.head가 null이면 head로 지정해줄 것. 
        this.head = newNode;
        this.tail = newNode;
    }
    
    this.tail.next = newNode;
    this.tail = newNode;
    return newNode.data;
}

Linkedlist.prototype.delete = function (){
    if(!this.head){
        return false;
    }
    var temp = this.head;

    while(temp.next.next !== null){
        temp = temp.next;
    }

    console.log("삭제할 것 : "+temp.next.data);
    temp.next = null;
    this.tail = temp;
    this.length--;
    return this.tail.data;
}

var list = new Linkedlist();
console.log(list.add(3));
console.log(list.add(5));
console.log(list.add(7));
console.log(list.add(9));
console.log(list.delete());