function findThreeLargestNumbers(array) {
  return array
    .sort((a, b) => a - b)
    .slice(-3)
}
