var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var key = someInstance.size().toString();
    storage[key] = value;
  };

  someInstance.pop = function() {
    var key = (someInstance.size() - 1).toString();
    var popped = storage[key];
    delete storage[key];
    return popped;
  };

  someInstance.size = function() {
    var stackSize = 0;
    for (var x in storage) {
      stackSize++;
    }
    return stackSize;
  };

  return someInstance;
};
