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

function insertTwoWayArc(graph, data, from, to) {
  graph.insertArc(data, from, to);
  graph.insertArc(data, to, from);
}

var graph = new Graph();
graph.insertVertex("A");
graph.insertVertex("B");
graph.insertVertex("C");
graph.insertVertex("D");
graph.insertVertex("E");
graph.insertVertex("F");
graph.insertArc(1, "A", "B");
graph.insertArc(1, "B", "C");
graph.insertArc(1, "B", "E");
graph.insertArc(1, "C", "E");
graph.insertArc(1, "C", "D");
graph.insertArc(1, "E", "D");
graph.insertArc(1, "E", "F");
console.log(graph);
