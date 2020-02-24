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
}

const hasLoop = function (head) {
  let tortorise = head
  let hare = head
  while (hare && hare.next) {
    tortorise = tortorise.next
    hare = hare.next.next

    if (tortorise === hare) return true
  }
  return false
}

const n1 = new Node(1)
const ll = new LinkedList()
ll.head = n1
const n2 = new Node(2)
const n3 = new Node(3)
const n4 = new Node(4)
const n5 = new Node(5)

ll.next = n2
console.log(ll)
ll.next.next = n3
ll.next.next.next = n4
ll.next.next.next.next = n5
// n5.next = n2
ll.next.next.next.next.next = n2

console.log(hasLoop(ll.head))
