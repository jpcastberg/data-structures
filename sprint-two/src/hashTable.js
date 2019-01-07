

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) { // (cat, fiesty)
  var index = getIndexBelowMaxForKey(k, this._limit); // ex. return 1
  var overwritten = false;
  // if index of storage is undefined, storage[index] = []
  // push in key value pair storage[index].push()
  if (!this._storage[index]){
    this._storage.set(index, []);
  }
  for (var i = 0; i < storage[index].length; i++){
    if (storage[index][i][0] === k) {
      storage[index][i][1] = v;
      overwritten = true;
    }
  }
  if (!overwritten){
    this._storage[index].push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



// // Usage:
// //   limitedArray.set(3, 'hi');
// //   limitedArray.get(3); // returns 'hi'

// var LimitedArray = function(limit) {
//   var storage = [];

//   var limitedArray = {};
//   limitedArray.get = function(index) {
//     checkLimit(index);
//     return storage[index];
//   };
//   limitedArray.set = function(index, value) {
//     checkLimit(index);
//     storage[index] = value;
//   };
//   limitedArray.each = function(callback) {
//     for (var i = 0; i < storage.length; i++) {
//       callback(storage[i], i, storage);
//     }
//   };

//   var checkLimit = function(index) {
//     if (typeof index !== 'number') {
//       throw new Error('setter requires a numeric index for its first argument');
//     }
//     if (limit <= index) {
//       throw new Error('Error trying to access an over-the-limit index');
//     }
//   };

//   return limitedArray;
// };

// // This is a "hashing function". You don't need to worry about it, just use it
// // to turn any string into an integer that is well-distributed between the
// // numbers 0 and `max`
// var getIndexBelowMaxForKey = function(str, max) {
//   var hash = 0;
//   for (var i = 0; i < str.length; i++) {
//     hash = (hash << 5) + hash + str.charCodeAt(i);
//     hash = hash & hash; // Convert to 32bit integer
//     hash = Math.abs(hash);
//   }
//   return hash % max;
// };

// /*
//  * Complexity: What is the time complexity of the above functions?
//  */

