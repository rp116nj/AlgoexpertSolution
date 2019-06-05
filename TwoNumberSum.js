

function twoNumberSum(array, targetSum) {
  // Write your code here.
   array = array.sort((a, b) => a - b);
  let leftIdx = 0;
  let rightIdx = array.length - 1;
  while (leftIdx < rightIdx) {
    if (array[leftIdx] + array[rightIdx] < targetSum) {
      leftIdx++;
    } else if (array[leftIdx] + array[rightIdx] > targetSum) {
      rightIdx--;
    } else {
      return [array[leftIdx], array[rightIdx]];
    }
  }
}
//using a hash table
function twoNumberSum(array, targetSum) {
  let nums = {}
  for (let num of array) {
    let potentialMatch = targetSum - num
    if (potentialMatch in nums) {
      return [potentialMatch, num].sort((a, b) => a - b)
    }
    else {
      nums[num] = true
    }
  }
  return []
}
