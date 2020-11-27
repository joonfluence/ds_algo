console.log("좋은 건 한번 더");

// 링크드리스트가 관리해야 할 정보는 this.head, this.tail, this.count

function Linkedlist(){
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.index = 0;
}

function Node(data){
    this.next = null;
    this.data = data;
}

Linkedlist.prototype.add = function (data){
    let newNode = new Node(data);
    
// head = null이면 newNode로 지정해줄 것

    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
        this.index = 1;
    } 

// add : 가장 마지막에 node를 추가한다. 

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.tail.data;
}

// delete : 가장 마지막에 있는 node를 삭제한다. 

Linkedlist.prototype.delete = function (){
    if(!this.head){
        return false;
    }
    
    let temp = this.head;
    while(temp.next.next !== null){
        temp = temp.next;
    }
    
    let deleteNode = temp.next;
    temp.next = null;
    this.tail = temp;
    return deleteNode.data;
}

// find : data를 입력하면 해당 data가 위치를 반환해주는 메소드 

Linkedlist.prototype.find = function (data){
    try {
        let temp = this.head;
        let position = this.index;
        while(temp.data !== data){
            temp = temp.next;
            position++;
        }
        return position+"번째입니다";
    } catch {
        return false;
    }
}

// search : position을 입력하면 해당 position의 data를 반환해주는 메소드 

Linkedlist.prototype.search = function (position){
    try {
        let num = this.index;
        let temp = this.head;
        while(num < position){
            temp = temp.next;
            num++;
        }
        return temp.data+"입니다";
    } catch (e){
        console.log("안된다");
        return false;
    }
}

let linkedlist = new Linkedlist();
console.log(linkedlist.add(1));
console.log(linkedlist.add(2));
console.log(linkedlist.add(3));
console.log(linkedlist.find(3));
console.log(linkedlist.search(0));
console.log(linkedlist.find(4));
console.log(linkedlist.delete());
