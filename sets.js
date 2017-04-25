var mySet = function () {
  var storage = [];

  this.has = function (value) {
    return storage.indexOf(value) !== -1;
  }

  this.values = function () {
    return storage;
  }

  this.add = function (value) {
    if (!this.has(value)) {
      storage.push(value);
      return true;
    }

    return false;
  }

  this.remove = function (value) {
    if (this.has(value)) {
      storage = storage.filter(function (elem) { return elem !== value; });
      return true;
    }

    return false;
  }

  this.size = function () {
    return storage.length;
  }

  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(function(e) { unionSet.add(e); });
    secondSet.forEach(function(e) { unionSet.add(e); });

    return unionSet;
  }

  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();

    firstSet.forEach(function(e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });

    return intersectionSet;
  }

  this.difference = function (otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();

    firstSet.forEach(function(e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });

    return differenceSet;
  }

  this.subset = function (otherSet) {
    var firstSet = this.values();

    return firstSet.reduce(function(acc, elem) {
      return acc && otherSet.has(elem);
    }, true);
  }
}

mySet.prototype.inspect = function() {
  return JSON.stringify(this.values());
}

mySet.prototype.toString = function() {
  return JSON.stringify(this.values());
}

var setA = new mySet();
var setB = new mySet();

setA.add(1);
setB.add(2);
setB.add(3);
setB.add(1);

console.log(setA.subset(setB));
console.log(setB.difference(setA).toString() === JSON.stringify([2, 3]));
console.log(setB.union(setA).toString() === setB.toString());
console.log(setB.intersection(setA).toString() === setA.toString());
console.log(setA.has(1));
console.log(setA.remove(1));
console.log(JSON.stringify(setA.values()) === JSON.stringify([]));