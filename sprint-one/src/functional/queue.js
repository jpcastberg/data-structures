var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var posInQueue = (someInstance.size()).toString();
    storage[posInQueue] = value;
  };

  someInstance.dequeue = function() {
    var deletedValue = storage['0'];
    delete storage['0'];
    for (var i = 0; i < someInstance.size(); i++) {
      var currentKey = (i + 1).toString();
      storage[(i).toString()] = storage[currentKey];
      delete storage[currentKey];
    }
    return deletedValue;
  };

  someInstance.size = function() {
    var size = 0;
    for(x in storage){
      size++;
    }
    return size;
  };

  return someInstance;
};
