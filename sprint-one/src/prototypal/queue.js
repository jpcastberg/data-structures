var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return newQueue;
};

var queueMethods = {
  enqueue: function(value) {
    var posInQueue = (this.size()).toString();
    this.storage[posInQueue] = value;
  },

  dequeue: function() {
    var deletedValue = this.storage['0'];
    delete this.storage['0'];
    for (var i = 0; i < this.size(); i++) {
      var currentKey = (i + 1).toString();
      this.storage[(i).toString()] = this.storage[currentKey];
      delete this.storage[currentKey];
    }
    return deletedValue;
  },

  size: function() {
    var size = 0;
    for(x in this.storage){
      size++;
    }
    return size;
  }
};