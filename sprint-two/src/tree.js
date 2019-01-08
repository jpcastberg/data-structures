
// Write an extend function to use for the class Tree

var extend = function(obj, methods) {
  for (var prop in methods) {
    obj[prop] = methods[prop];
  }

}

var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  // fix me
  
  extend(newTree, treeMethods)
  // extend newTree with the methods below
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  this.children.push(Tree(value));
  // Pushing new tree into its parents.children array 
};

treeMethods.contains = function (target) {
  // Recursively traverse Tree and if any child's value matches the target, return true
  //define inner function that takes in an obj
  // if obj.value === target, return true
  //else call recursive function on each child node using for loop
  var treeContains = false;

  var nodeContains = function (node) {
    if (node.value === target) {
      treeContains = true;
      return;
    } else {
      for (var i = 0; i < node.children.length; i++) {
        if (!treeContains) {
          nodeContains(node.children[i]);
        }
      }
    }
  }
  nodeContains(this)
  return treeContains;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

//var topOfTree = Tree();