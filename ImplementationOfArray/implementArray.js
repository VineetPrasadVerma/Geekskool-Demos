class Array {
  constructor () {
    this.length = 0
    this.data = {} // actual object for storing array where key is index and value is element at index
  }

  getElementAtIndex (index) {
    return this.data[index]
  }

  push (element) {
    this.data[this.length] = element
    this.length++
    return this.length
  }

  pop () {
    const item = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return item
  }

  deleteAt (index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
    return this.data
  }

  insertAt (item, index) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.data[index] = item
    this.length++
    return this.data
  }
}

const array = new Array() // instantiating an object of Array class
array.push(12)
array.push(13) // pushing element
array.push(14)
array.push(10)
array.push(989)
// array.data[-1] = 78

// console.log(array.data)

// for (const ele in array.data) {
//   console.log(array.data[ele])
// }

// Quiz
const a = [1, 2, 3]
a[4] = 'xyz'
console.log(a.length) // 5

a[57] = [100]
console.log(a.length) // 58
console.log(a)
a[-2] = 23
a['nandini'] = 76
a['nandini'] = 100
a[-3] = 23
console.log('Negative cases')
console.log(a.length) // 58
console.log(a)

a[-2] = 23
console.log('Negative cases')
console.log(a.length)
console.log(a)
