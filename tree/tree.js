function Tree(){
    this.root = null;
    this.count = 0;
}

function Node(data){
    this.parentNode = null;
    this.leftChild = null;
    this.rightChild = null;
    this.data = data;
}

Tree.prototype.getRoot = () => {
    return this.root;
}
// * Add 메소드 만드는 방법
// 1. 새로운 노드를 추가한다. 
// 2. root가 null이면 root로 newNode를 지정한다. 
// 3. treeTraversal 함수를 만들어, 새로운 노드의 부모노드를 파악한다. 
// - 루트노드에서 시작한다. 
// - 루트노드의 leftChild보다 값이 작은지 따져본다. 
// - 만약 작으면 다시 탐색한다. 크면 루트노드의 rightChild보다 값이 큰지 따져본다. 

function _add(root, node){
    if(!root){
        return node;
    }

    if(node.data < root.data){
        root.left = _add(root.left, node);
        return root;
    } else {
        root.right = _add(root.right, node);
        return root;
    }
}

Tree.prototype.add = (data) => {
    let newNode = new Node(data);
    this.count++;
    
    if(!this.root){
        this.root = newNode;
    } else {
        _add(this.root, newNode);
    }

    return newNode;
}

function preorder(root) {
    if(!root){
        return ;
    }
        console.log("Root value "+JSON.stringify(root));
        console.log("PreOrderTraversal " + root);
        preorder(root.left);
        preorder(root.right);
}

let testTree = new Tree();

testTree.add(3);
testTree.add(1);
testTree.add(2);
testTree.add(4);
testTree.add(5);

// console.log(testTree.getRoot());
preorder(testTree.getRoot());