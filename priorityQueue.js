function PriorityQueue() {
  var storage = [];

  this.printCollection = function () {
    console.log(storage);
  }

  this.enqueue = function (element) {
    var added = false;
    for (var i = 0; i < storage.length; i++) {
      if (element[1] < storage[i][1]) {
        storage.splice(i, 0, element);
        added = true;
        break;
      }
    }

    if (!added) storage.push(element);
  }

  this.dequeue = function () {
    var value = storage.shift();
    return value[0];
  }

  this.front = function () {
    return storage[0];
  }

  this.size = function () {
    return storage.length;
  }

  this.isEmpty = function () {
    return storage.length === 0;
  }
}

var pq = new PriorityQueue();

pq.enqueue(['Dwight', 2]);
pq.enqueue(['Jim', 3]);
pq.enqueue(['Michael', 1]);

pq.printCollection();
console.log(pq.dequeue() === 'Michael');
console.log(pq.front()[0] === 'Dwight');