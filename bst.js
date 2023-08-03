class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.head = null;
  }

  insertNode(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      console.log("Placing the head of the tree!");
    } else {
      let temp = this.head;
      let condition = false;
      while (!condition) {
        if (temp.data > newNode.data) {
          if (!temp.right) {
            temp.right = newNode;
            condition = true;
            console.log("Placed Node!");
          } else {
            temp = temp.right;
            console.log("Moving right!");
          }
        } else {
          if (!temp.left) {
            temp.left = newNode;
            condition = true;
            console.log("Placed Node!");
          } else {
            temp = temp.left;
            console.log("Moving left!");
          }
        }
      }
    }
  }

  printTree() {
    this.printTreeRecursive(this.head);
  }

  printTreeRecursive(node) {
    if (node) {
      this.printTreeRecursive(node.left);
      console.log(node.data);
      this.printTreeRecursive(node.right);
    }
  }
}

let tree = new BST();
tree.insertNode(10);
tree.insertNode(2);
tree.insertNode(15);
tree.insertNode(4);
tree.insertNode(8);
tree.insertNode(9);
tree.printTree();