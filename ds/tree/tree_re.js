const preOrderResult = [];
const inOrderResult = [];
const postOrderResult = [];

const Node = function (data) {
  this.data = data;
  this.left = null;
  this.right = null;
};

const bTree = function () {
  this.root = null;
};

bTree.prototype.makeTree = function (left, data, right) {
  const newNode = new Node(data);
  newNode.left = left;
  newNode.right = right;
  return newNode;
};

bTree.prototype.preOrder = function (treeRoot) {
  if (treeRoot !== null) {
    preOrderResult.push(treeRoot.data);
    this.preOrder(treeRoot.left);
    this.preOrder(treeRoot.right);
  }
};

bTree.prototype.inOrder = function (treeRoot) {
  if (treeRoot !== null) {
    this.inOrder(treeRoot.left);
    inOrderResult.push(treeRoot.data);
    this.inOrder(treeRoot.right);
  }
};

bTree.prototype.postOrder = function (treeRoot) {
  if (treeRoot !== null) {
    this.postOrder(treeRoot.left);
    this.postOrder(treeRoot.right);
    postOrderResult.push(treeRoot.data);
  }
};

const main = function () {
  const tree = new bTree();
  const n7 = tree.makeTree(null, "7", null);
  const n6 = tree.makeTree(null, "6", null);
  const n5 = tree.makeTree(null, "5", null);
  const n4 = tree.makeTree(null, "4", null);
  const n3 = tree.makeTree(n6, "3", n7);
  const n2 = tree.makeTree(n4, "2", n5);
  const n1 = tree.makeTree(n2, "1", n3);

  console.log("전위 순회");
  tree.preOrder(n1);
  console.log(preOrderResult.join(" "));

  console.log("중위 순회");
  tree.inOrder(n1);
  console.log(inOrderResult.join(" "));

  console.log("후위 순회");
  tree.postOrder(n1);
  console.log(postOrderResult.join(" "));
};

main();
