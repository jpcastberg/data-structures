class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var key = this.size().toString();
    this.storage[key] = value;
  }

  pop() {
    var key = (this.size() - 1).toString();
    var popped = this.storage[key];
    delete this.storage[key];
    return popped;
  }

  size() {
    var stackSize = 0;
    for (var x in this.storage) {
      stackSize++;
    }
    return stackSize;
  }

}