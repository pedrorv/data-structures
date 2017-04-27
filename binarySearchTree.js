function Node (data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function BST () {
  this.root = null;

  this.add = function (data) {
    var node = this.root;

    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      var searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };

      return searchTree(node);
    }
  }

  this.findMin = function () {
    var current = this.root;

    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  this.findMax = function () {
    var current = this.root;

    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  this.find = function (data) {
    var current = this.root;

    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }

      if (current === null) return null;
    }

    return current;
  }

  this.isPresent = function (data) {
    var current = this.root;

    while (current) {
      if (current.data === data) return true;

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  this.remove = function (data) {
    var removeNode = function (node, data) {
      if (node === null) { return null; }

      if (data === node.data) {
        if (node.left === null && node.right === null) { return null; }

        if (node.left === null) { return node.right; }
        if (node.right === null) { return node.left; }

        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    this.root = removeNode(this.root, data);
  }
}

var bst = new BST();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);
console.log(bst.findMin() === 1);
console.log(bst.findMax() === 7);
console.log(bst.isPresent(4) === false);