

// Instantiate a new graph
var Graph = function() {
  this.nodeArr = [];
  this.edgeArr = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeArr.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodeArr.includes(node)) {
    return true;
  }  
  return false; 
};

// Removes a node from the graph. All edges connected to that Node are removed as well.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodeArr.length; i ++) {
    if (this.nodeArr[i] === node) {
      this.nodeArr.splice(i, 1);
    }
  }

  for (var i = 0; i < this.edgeArr.length; i ++) {
    if (this.edgeArr[i].includes(node)) {
      this.edgeArr.splice(i, 1);
    }
  
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edgeArr.length; i++) {
    if (this.edgeArr[i].includes(fromNode) && this.edgeArr[i].includes(toNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  
  if (this.nodeArr.includes(fromNode) && this.nodeArr.includes(toNode)) {
    this.edgeArr.push([fromNode, toNode]);
  }
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edgeArr.length; i++) {
    if (this.edgeArr[i].includes(fromNode) && this.edgeArr[i].includes(toNode)) {
      this.edgeArr.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodeArr.length; i ++) {
    cb(this.nodeArr[i]);
  }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


