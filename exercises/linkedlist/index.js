// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data){
    this.head = new Node(data, this.head)
  }

  size() {
    let count = 0
    let node = this.head
    while (node) {
      count++
      node = node.next
    }
    return count
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let node = this.head

    if (!this.head) {
      return null
    }
    while (node) {
      if (!node.next) {
        return node
      }
      node = node.next
    }
    return lastNode
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head.next) {
      this.clear()
      return
    }
    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) {
      return null
    }
    if (!this.head.next) {
      this.head = null
      return
    }

    let node = this.head
    while (node.next.next) {
      node = node.next
    }
    node.next = null
  }

  insertLast(data) {
    let lastNode = this.getLast()
    if (lastNode) {
      lastNode.next = new Node(data)
    }
    else {
      this.head = new Node(data)
    }
  }

  getAt(integer) {
    if (!this.head) {
      return null
    }
    if (integer === 0) {
      return this.head
    }
    let count = 0
    let node = this.head
    while (node && count < integer) {
      node = node.next
      count++
    }
    return node
  }

  removeAt(integer) {
    if (!this.head) {
      return null
    }

    if (integer > this.size() - 1) {
      return
    }

    if (integer === 0) {
      this.head = this.head.next
      return
    }

    if (integer === this.size() - 1) {
      this.removeLast()
      return
    }

    let prevNode = this.getAt(integer - 1)
    let node = prevNode.next
    if (node.next) {
      prevNode.next = node.next
    }
    else {
      prevNode.next = null
    }
  }

  insertAt(data, integer) {
    if (!this.head) {
      this.head = new Node(data)
      return
    }
    if (!this.getAt(integer) || integer > this.size()) {
      this.insertLast(data)
      return
    }
    if (integer === 0) {
      this.insertFirst(data)
      return
    }

    let prevNode = this.getAt(integer - 1)
    let node = new Node(data, prevNode.next)
    prevNode.next = node
  }

  forEach(fn) {
    if (!this.head) {
      return
    }

    let node = this.head
    while (node) {
      fn(node)
      node = node.next
    }
    return
  }

  

}





module.exports = { Node, LinkedList };
