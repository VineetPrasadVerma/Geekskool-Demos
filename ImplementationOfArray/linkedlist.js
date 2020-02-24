class Node {
  // constructor
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.size = 0
  }

  add (element) {
    const node = new Node(element)
    var current
    if (this.head == null) this.head = node
    else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.size++
  }

  insertAt (element, index) {
    if (index > 0 && index > this.size) return false
    else {
      // creates a new node
      const node = new Node(element)
      let curr = this.head
      let prev = null

      // add the element to the first index
      if (index === 0) {
        node.next = null
        this.head = node
      } else {
        curr = this.head
        let temp = 0

        // iterate over the list to find
        while (temp < index) {
          temp++
          prev = curr
          curr = curr.next
        }

        // adding an element
        node.next = curr
        prev.next = node
      }
      this.size++
    }
  }

  // removes an element from the index
  removeFrom (index) {
    if (index > 0 && index > this.size) return -1
    else {
      let curr = this.head
      let prev = curr
      let temp = 0

      // deleting first element
      if (index === 0) {
        this.head = curr.next
      } else {
        // iterate over the list
        while (temp < index) {
          temp++
          prev = curr
          curr = curr.next
        }

        // remove the element
        prev.next = curr.next
      }
      this.size--

      return curr.element
    }
  }

  removeElement (element) {
    let current = this.head
    let prev = null

    // iterate over the list
    while (current != null) {
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next
        } else {
          prev.next = current.next
        }
        this.size--
        return current.element
      }
      prev = current
      current = current.next
    }
    return -1
  }

  // Helper methods
  indexOf (element) {
    let count = 0
    let current = this.head

    while (current != null) {
      if (current.element === element) return count
      count++
      current = current.next
    }

    return -1
  }

  isEmpty () {
    return this.size === 0
  }

  sizeOfList () {
    console.log('Size of the list - > ' + this.size)
  }

  printList () {
    let curr = this.head
    let str = ''
    while (curr) {
      str += curr.element + ' '
      curr = curr.next
    }
    console.log(str)
  }
}

const ll = new LinkedList()
console.log(ll.isEmpty())

ll.add(10)

ll.printList()

ll.sizeOfList()

ll.add(20)
ll.add(30)
ll.add(40)
ll.add(50)

ll.printList()

console.log('is element removed ?' + ll.removeElement(50))

// prints 10 20 30 40
ll.printList()

// returns 3
console.log('Index of 40 ' + ll.indexOf(40))

ll.insertAt(60, 2)

ll.printList()

console.log('is List Empty ? ' + ll.isEmpty())

console.log(ll.removeFrom(3))

ll.printList()
