var BinarySearchTree = function(value) {
  this.value = value;

  this.left = undefined;
  this.right = undefined;

  //cb(this.value);
  //if(this.left) -> this.left.depthFirstLog(cb);
  //if(this.right) -> this.right.depthFirstLog(cb)
  
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value === undefined) {
    this.value = value;
    return;
  }  
  if (value === this.value) {
    return;
  }
  if (value < this.value && !this.left) {
    this.left = new BinarySearchTree(value);
    return;
  }
  if (value > this.value && !this.right) {
    this.right = new BinarySearchTree(value);
    return;
  }
  if (value < this.value && this.left) {
    this.left.insert(value);
  }
  if (value > this.value && this.right) {
    this.right.insert(value);
  } 
  // no return
}

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  }
  if (value < this.value && this.left)  {
    return this.left.contains(value);
  } 
  if (value > this.value && this.right) {
    return this.right.contains(value);
  }
  return false;
}

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);

  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*

Notes

1. Tree's children are trees themselves that can have 0 - 2 children
2. ALL values in the left property will be less than this.value. ALL values in the right property will be more than this.value.




*/