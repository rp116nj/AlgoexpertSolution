function bubbleSort(array) {
 
  for (let i = 0; i < array.length; i++) {
    let swap = false
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j + 1] < array[j]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        swap = true
      }
    }
    if (swap === false) return array
  }
}