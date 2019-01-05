var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    // If (!list.head && !list.tail) We set list.head AND list.tail to the value
  };

  list.removeHead = function () {
  };

  list.contains = function (target) {
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
