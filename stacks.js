var Stack = function() {
  var count = 0;
  var storage = [];

  this.push = function (value) {
    storage[count] = value;
    count++;
  }

  this.pop = function () {
    if (count === 0) { return undefined; }

    count--;
    var last = storage[count];
    delete storage[count];

    return last;
  }

  this.size = function () {
    return count;
  }

  this.peek = function () {
    return storage[count-1];
  }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(1);

console.log(myStack.pop() === 1);
console.log(myStack.peek() === 2);
console.log(myStack.size() === 2);