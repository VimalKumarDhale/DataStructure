export class LinkedList {
  head: Node;

  addFront(data: any) {
    // Create new node
    const newNode: Node = new Node(data);

    // if head null
    if (this.head == null || this.head == undefined) {
      this.head = newNode;
      return;
    }

    // Set it's next to current head
    newNode.next = this.head;

    // Set current head equal to this new head
    this.head = newNode;
  }

  deleteValue(data: any) {
    // if head
    if (this.head == null) {
      return;
    }
    if (this.head.data == data) {
      this.head = this.head.next;
      return;
    }

    // else walk the list
    let current: Node = this.head;

    while (current.next != null) {
      if (current.next.data == data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  deleteLast() {
    if (this.head == null) {
      return;
    }

    if (this.head.next == null || this.head.next == undefined) {
      let d = this.head.data;
      this.head = null;
      return d;
    }

    let current: Node = this.head;
    while (current.next != null) {
      if (!current.next.next) {
        current.next = null;
        return current.data;
      }
      current = current.next;
    }
  }

  getSize() {
    if (this.head == null) {
      return 0;
    }

    let count: number = 1;
    let current: Node = this.head;

    while (current.next != null) {
      current = current.next;
      count++;
    }

    return count;
  }
}

class Node {
  data: any;
  next: Node;
  constructor(data: any) {
    this.data = data;
  }
}
