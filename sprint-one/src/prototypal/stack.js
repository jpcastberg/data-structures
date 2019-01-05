var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var key = this.size().toString();
  this.storage[key] = value;
};

stackMethods.pop = function() {
  var key = (this.size() - 1).toString();
  var popped = this.storage[key];
  delete this.storage[key];
  return popped;
};

stackMethods.size = function() {
  var stackSize = 0;
  for (var x in this.storage) {
    stackSize++;
  }
  return stackSize;
};