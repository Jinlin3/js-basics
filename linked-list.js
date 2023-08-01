
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }
  listSize() {
    let temp = this.head;
    let i = 0;
    while (temp) {
      i++;
      temp = temp.next;
    }
    return i;
  }
  printList() {
    let temp = this.head;
    while (temp) {
      process.stdout.write(temp.data + " -> ");
      temp = temp.next;
    }
    process.stdout.write("NULL");
    console.log();
  }
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(4);

list.printList();
console.log("Size of List: " + list.listSize());