function binarySearch(array, target) {
  // Write your code here.
  return binarySearchHelper(array, target, 0, array.length - 1 )
}
function binarySearchHelper(array, target, left, right) {
  if (left > right) {
    return -1
  }
  else {
    let midpt = Math.floor((left + right) / 2)
    if (array[midpt] === target) {
      return midpt
    }
    else if (array[midpt] > target) {
      return binarySearchHelper(array, target, left, midpt - 1)
    }
    else {
      return binarySearchHelper(array, target, midpt + 1, right)
    }
  }
}
