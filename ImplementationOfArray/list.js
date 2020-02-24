let lst = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}

function listToArray () {
  const arr = []
  while (lst) {
    arr.push(lst.value)
    lst = lst.rest
  }
  return arr
}

console.log(listToArray(lst))

// const arr = [1, 2, 3]
// const deleted = delete arr[1]
// console.log(arr, deleted)
// console.log(arr[100])
