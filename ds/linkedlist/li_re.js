    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.index = 0;
    }

    function Node(data) {
        this.next = null;
        this.data = data;
    }

    LinkedList.prototype.add = (data) => {
        let newNode = new Node(data);

    // this.head 값이 null일 때
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.index = 1;
        }

    // this.tail로 생성되는 newNode와 기존 노드를 연결시켜준다. 
        this.tail.next = newNode;

    // this.tail 값을 newNode로 설정해준다. 
        this.tail = newNode;

    // length 값을 추가해준다. 
        this.length++;

    // 새로 생성된 값의 데이터를 리턴해준다. 
        return this.tail.data;
    }

    LinkedList.prototype.removeLast = () => {
        if (!this.head) {
            return false;
        }

        let temp = this.head;

    // temp.next.next가 null이란 것은 temp.next가 마지막 원소라는 것이다. 그 이전 원소가 temp가 된다. 

        while (temp.next.next !== null) {
            temp = temp.next;
        }

        let deletedNode = this.tail;
        this.tail = temp;
        this.tail.next = null;
        return deletedNode.data;
    }

    // find : data를 입력하면 해당 data가 위치를 반환해주는 메소드 

    LinkedList.prototype.find = (data) => {
        try {
            let temp = this.head;
            let position = this.index;
            while (temp.data !== data) {
                temp = temp.next;
                position++;
            }
            return position + "번째입니다";
        } catch {
            return false;
        }
    }

    // search : position을 입력하면 해당 position의 data를 반환해주는 메소드 

    function _search(head, position) {
        try {
            let num = 0;
            let temp = head;
            while (num < position) {
                temp = temp.next;
                num++;
            }
            return temp;
        } catch (e) {
            console.log("안된다");
            return false;
        }
    }

    LinkedList.prototype.search = (position) => {
        try {
            let num = 0;
            let temp = this.head;
            while (num < position) {
                temp = temp.next;
                num++;
            }
            return temp;
        } catch (e) {
            console.log("안된다");
            return false;
        }
    }

    // 원하는 위치(index)에 값을 넣어준다. 
    
    LinkedList.prototype.insert = (data, index) => {
        let newNode = new Node(data);
        let prevNode = _search(this.head, index-1);
        let nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;
        
        return newNode.data;
    }

    LinkedList.prototype.getHead = () => {
        return this.head;
    }

    LinkedList.prototype.getTail = () => {
        return this.tail;
    }

var list = new LinkedList();
console.log(list.add(1));
console.log(list.add(2));
console.log(list.add(3));
console.log(list.search(0)); // 1
console.log(list.search(2)); // 3
// console.log(list.removeLast());
console.log(list.insert(7, 1));
console.log(list.getHead()); // 
console.log(list.getTail()); // 
