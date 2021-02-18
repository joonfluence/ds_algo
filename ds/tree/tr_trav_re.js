console.log("세번째 구현하기");

function Tree(){
    this.root = null;
}

function Node(data){
    this.data = data;
    this.left = null;
    this.right = null;
}

function _add(root, node){
    
    if(!root){
        return node;
    }

    if(root.data > node.data){
        root.left = _add(root.left, node);
        return root;
    } else if(root.data < node.data) {
        root.right = _add(root.right, node);
        return root;
    } else {
        throw("같은 값을 추가할 수 없습니다.");
    }
}

Tree.prototype.add = function (data){
    let newNode = new Node(data);

    if(!this.root){
        this.root = newNode;
    } else {
        _add(this.root, newNode);
    }

    return newNode;
}

// 삭제할 노드를 찾아서 반환해줌. 

function _find(root, node){
    
    if(root.data === node.data){
        console.log("삭제할 노드를 찾았다!");
        return root;
    } 
    
    if(root.data < node.data){
        _find(root.left, node);
    } else if(root.data < node.data){
        _find(root.right, node);
    }

}

Tree.prototype.hasChild = function (node){
    return (node.left || node.right);
}

// Tree.prototype.remove = function (node){
//     var node = _find(this.root, node);

//     if(this.hasChild(node)){

//     } else if(){

//     }
// }

Tree.prototype.preOrderTraversal = function (root){

    if(!root){
        return ;
    }

    console.log(root.data);
    this.preOrderTraversal(root.left);
    this.preOrderTraversal(root.right);
}

Tree.prototype.inOrderTraversal = function (root){
    
    if(!root){
        return ;
    }

    this.inOrderTraversal(root.left);
    console.log(root.data);
    this.inOrderTraversal(root.right);
}

Tree.prototype.postOrderTraversal = function (root){

    if(!root){
        return ;
    }

    this.postOrderTraversal(root.left);
    this.postOrderTraversal(root.right);
    console.log(root.data);
}

Tree.prototype.getRoot = function (){
    return this.root;
}

const main = function () {
    const testTree = new Tree();
    testTree.add(5);
    testTree.add(3);
    testTree.add(7);
    testTree.add(2);
    testTree.add(4);
    testTree.add(6);
    testTree.add(8);

    console.log("hasChild "+testTree.hasChild(5));

    console.log("전위순회 시작합니다!");
    testTree.preOrderTraversal(testTree.getRoot());
    
    console.log("중위순회 시작합니다!");
    testTree.inOrderTraversal(testTree.getRoot());

    console.log("후위순회 시작합니다!");
    testTree.postOrderTraversal(testTree.getRoot());
}

main();