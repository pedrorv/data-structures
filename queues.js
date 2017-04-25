var Queue = function () {
  var storage = [];

  this.print = function () {
    console.log(storage);
  }

  this.enqueue = function (value) {
    storage.push(value);
  }

  this.dequeue = function () {
    return storage.shift();
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

var queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);

console.log(queue.dequeue() === 1);
console.log(queue.size() === 1);
console.log(queue.front() === 2);
console.log(queue.isEmpty() === false);