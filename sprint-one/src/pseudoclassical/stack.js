var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var key = this.size().toString();
  this.storage[key] = value;
};

Stack.prototype.pop = function() {
  var key = (this.size() - 1).toString();
  var popped = this.storage[key];
  delete this.storage[key];
  return popped;
};

Stack.prototype.size = function() {
  var stackSize = 0;
  for (var x in this.storage) {
    stackSize++;
  }
  return stackSize;
};