var Graph = (function () {
  function Vertex(key) {
    this.next = null;
    this.arc = null;
    this.key = key;
    this.inTree = null;
  }
  function Arc(data, dest, capacity) {
    this.nextArc = null;
    this.destination = dest;
    this.data = data;
    this.capacity = capacity;
    this.inTree = null;
  }
  function Graph() {
    this.count = 0;
    this.first = null;
  }
  Graph.prototype.insertVertex = function (key) {
    var vertex = new Vertex(key);
    var last = this.first;
    if (last) {
      while (last.next !== null) {
        last = last.next;
      }
      last.next = vertex;
    } else {
      this.first = vertex;
    }
    this.count++;
  };
  Graph.prototype.deleteVertex = function (key) {
    var vertex = this.first;
    var prev = null;
    while (vertex.key !== key) {
      prev = vertex;
      vertex = vertex.next;
    }
    if (!vertex) return false;
    if (!vertex.arc) return false;
    if (prev) {
      prev.next = vertex.next;
    } else {
      this.first = vertex.next;
    }
    this.count--;
  };
  Graph.prototype.insertArc = function (data, fromKey, toKey, capacity) {
    var from = this.first;
    var to = this.first;
    while (from && from.key !== fromKey) {
      from = from.next;
    }
    while (to && to.key !== toKey) {
      to = to.next;
    }
    if (!from || !to) return false;
    var arc = new Arc(data, to, capacity);
    var fromLast = from.arc;
    if (fromLast) {
      while (fromLast.nextArc != null) {
        fromLast = fromLast.nextArc;
      }
      fromLast.nextArc = arc;
    } else {
      from.arc = arc;
    }
  };
  Graph.prototype.deleteArc = function (fromKey, toKey) {
    var from = this.first;
    while (from !== null) {
      if (from.key === fromKey) break;
      from = from.next;
    }
    if (!from) return false;
    var fromArc = from.arc;
    var preArc;
    while (fromArc !== null) {
      if (toKey === fromArc.destination.key) break;
      preArc = fromArc;
      fromArc = fromArc.next;
    }
    if (!fromArc) return false;
    if (preArc) {
      preArc.nextArc = fromArc.nextArc;
    } else {
      from.arc = fromArc.nextArc;
    }
  };
  return Graph;
})();

function Stack() {
  this.top = null;
  this.count = 0;
}

function Node(data) {
  this.data = data;
  this.next = null;
}

Node.prototype = new Stack();

Stack.prototype.push = function (data) {
  var node = new Node(data);
  node.next = this.top;
  this.top = node;
  this.count++;
  return this.top;
};

Stack.prototype.pop = function () {
  if (!this.top) {
    console.log("stack-underflow 발생");
    return false;
  }
  var data = this.top.data;
  this.top = this.top.next;
  this.count--;
  return data;
};

Graph.prototype.dfs = function () {
  var stack = new Stack();
  var temp = this.first;
  while (temp) {
    temp.inTree = false;
    temp = temp.next;
  }
  temp = this.first;
  stack.push(temp);
  temp.inTree = true;
  while (stack.count) {
    temp = stack.pop();
    console.log(temp.key);
    temp.inTree = true;
    var arc = temp.arc;
    while (arc) {
      if (!arc.destination.inTree) {
        stack.push(arc.destination);
      }
    }
  }
};

function insertTwoWayArc(graph, data, from, to) {
  graph.insertArc(data, from, to);
  graph.insertArc(data, to, from);
}

var graph = new Graph();
graph.insertVertex("A");
graph.insertVertex("X");
graph.insertVertex("G");
graph.insertVertex("H");
graph.insertVertex("P");
graph.insertVertex("E");
graph.insertVertex("Y");
graph.insertVertex("M");
graph.insertVertex("J");
insertTwoWayArc(graph, 1, "A", "X");
insertTwoWayArc(graph, 1, "X", "G");
insertTwoWayArc(graph, 1, "X", "H");
insertTwoWayArc(graph, 1, "G", "H");
insertTwoWayArc(graph, 1, "G", "P");
insertTwoWayArc(graph, 1, "H", "E");
insertTwoWayArc(graph, 1, "H", "P");
insertTwoWayArc(graph, 1, "E", "M");
insertTwoWayArc(graph, 1, "E", "Y");
insertTwoWayArc(graph, 1, "Y", "M");
insertTwoWayArc(graph, 1, "M", "J");

Graph.prototype.dfs = function () {
  var stack = new Stack();
  var temp = this.first;
  while (temp) {
    temp.inTree = false;
    temp = temp.next;
  }
  temp = this.first;
  stack.push(temp); // 스택에 첫 버텍스를 넣음
  temp.inTree = true;
  while (stack.count) {
    // 탐색을 완료할 때까지
    temp = stack.pop(); // 넣었던 버텍스를 하나씩 꺼냄
    console.log(temp.key);
    temp.inTree = true;
    var arc = temp.arc;
    while (arc) {
      if (!arc.destination.inTree) {
        stack.push(arc.destination); // 꺼낸 것과 연결된 버텍스들을 스택에 넣음
        arc.destination.inTree = true;
      }
      arc = arc.nextArc;
    }
  }
};

graph.dfs(); // A, X, H, P, E, Y, M, J, G
