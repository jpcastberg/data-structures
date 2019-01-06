var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    // O(1)
    // create new object using Node
    var newNode = Node(value);
    // If (!list.head && !list.tail) We set list.head AND list.tail toward new object
    if (!list.head && !list.tail) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    // If head and tail are defined
    // point tail towards just created object
    // list.tail = Node(value)
  };

  list.removeHead = function () {
    var removed = list.head.value;
    list.head = list.head.next ? list.head.next : null;
    if (!list.head) {
      list.tail = null;
    }
    return removed;
    // O(1)
    // 1. Assign a holder variable to list.head element TO be deleted
    // 2. Reassigns head to the element list.head points to
    // 3. deletes list.head element
    // 4. Returns the holder variable
  };

  list.contains = function (target) {

    var nextItem = function (obj) {
      if (obj.value === target) {
        return true;
      } else if (!obj.next) {
        return false;
      }

      return nextItem(obj.next);

    }

    return nextItem(list.head);
    // O(n)
    // Check every element starting from the head to see if anything matches to the target
    // Return boolean value based on lookup result
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
